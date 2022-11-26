import { html, htmlFor } from 'artworkjs';

const todo = () => {
  const { div, input, form, ul, h3, label, button } = html.create();

  h3.innerText = 'Todo';
  label.innerText = 'What needs to be done?';
  button.innerText = 'Add #1';

  htmlFor(label, input, 'new-todo');

  form.append(label, input, button);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = input.value;
    if (todo.length === 0) {
      return;
    }
    const item = html.create('li', todo);
    ul.append(item);
    
    button.innerText = `Add #${ul.childElementCount + 1}`;
    input.value = '';
  });

  div.append(h3, ul, form);

  return html.register({
    root: div,
    styles: 'form > * { margin-right: 5px; }',
    name: 'todo-list'
  });
}

export default todo;
