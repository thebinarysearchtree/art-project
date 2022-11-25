import { html, htmlFor } from 'artworkjs';

const text = {
  title: 'Todo',
  label: 'What needs to be done?',
  button: 'Add #1'
}

const todo = () => {
  const div = html.create('div');

  const title = html.create('h3', text.title);
  const label = html.create('label', text.label);
  const button = html.create('button', text.button);

  htmlFor(label, input, 'new-todo');

  form.append(label, input, button);

  form.addEventListener('submit', (e) => {
    const todo = input.value;
    if (todo.length === 0) {
      return;
    }
    const item = html.create('li', todo);
    ul.append(item);
    
    button.innerText = `Add #${ul.childElementCount + 1}`;
    input.value = '';
  });

  div.append(title, ul, form);

  return html.register({
    root: div,
    styles: 'form > * { margin-right: 5px; }',
    name: 'todo-list'
  });
}

export default todo;
