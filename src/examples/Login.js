import { html, FormInput, pushState } from 'artworkjs';

const input = (labelText) => {
  const { div, label, input } = html.create();
  label.innerText = labelText;
  if (labelText === 'password') {
    input.type = labelText;
  }

  div.append(label, input);

  return html.register({
    root: div,
    props: { input },
    name: 'basic-input',
    extends: FormInput
  });
}

const login = () => {
  const username = input('username');
  const password = input('password');
  const button = html.create('button', 'Login');

  const form = html.create('form');
  const error = html.create('p');

  form.append(username, password, button, error);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value === 'artwork' && password.value === 'artwork') {
      pushState('/');
    }
    else {
      error.innerText = 'Incorrect login';
      const clear = (element) => element.input.addEventListener('keydown', () => error.innerText = '', { once: true  });
      clear(username);
      clear(password);
    }
  });

  return html.register({
    root: form,
    name: 'basic-form'
  });
}

export default login;
