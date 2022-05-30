import { pushState } from 'artworkjs';
import cache from './cache.js';
import client from './client.js';

const reviver = (key, value, context) => {
  if (key.includes('_')) {
    const renamedKey = key.replace(/_[a-z]/g, (s) => s[1].toUpperCase());
    context[renamedKey] = value;
  }
  else {
    return value;
  }
}

const makeReviver = (parser) => {
  if (!parser) {
    return function(key, value) {
      return reviver(key, value, this);
    }
  }
  return function(key, value) {
    return reviver(key, parser(key, value), this);
  }
}

const defaultReviver = makeReviver();

const parse = async (response, reviver = defaultReviver) => {
  const text = await response.text();
  return JSON.parse(text, reviver);
}

const process = async (requests) => {
  const token = await client.getToken();
  const requestPromises = requests.map(request => {
    const { url, data } = request;
    return client.postData(url, data, token);
  });
  const responses = await Promise.all(requestPromises);
  const textPromises = responses
    .filter(r => r.ok)
    .map(r => r.text());
  if (textPromises.length !== requests.length) {
    if (responses.some(r => r.status === 401)) {
      pushState('/login');
    }
    else {
      pushState('/error');
    }
  }
  const textResults = await Promise.all(textPromises);
  textResults.forEach((textResult, i) => {
    const { url, data, handler, reviver } = requests[i];
    const result = JSON.parse(textResult, reviver ? reviver : defaultReviver);
    cache.set(url, data, result);
    handler(result);
  });
}

const fetchMany = (requests) => {
  const requestsToProcess = [];
  for (const request of requests) {
    const { url, data, handler } = request;
    const cachedResult = cache.get(url, data);
    if (cachedResult) {
      handler(cachedResult);
    }
    else {
      requestsToProcess.push(request);
    }
  }
  if (requestsToProcess.length > 0) {
    process(requestsToProcess);
  }
};

export {
  makeReviver,
  parse,
  fetchMany
};
