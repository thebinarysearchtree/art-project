import { html, FormInput } from 'artworkjs';

const input = (labelText) => {
  const { div, label, input } = html.create();
  label.innerText = labelText;

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
  form.append(username, password, button);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
  });

  return html.register({
    root: form,
    name: 'basic-form'
  });
}

export default login;
