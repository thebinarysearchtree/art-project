import { makeArt, ElementArt, html } from '../artwork/index.js';

const { div } = html;

class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}

const helloWorld = makeArt('hello-world', HelloWorld);

export default helloWorld;
