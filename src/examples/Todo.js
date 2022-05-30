import { makeArt, ElementArt, elements, html, setters, htmlFor, events } from 'artworkjs';

const li = html.li;
const setText = setters.setText;
const onSubmit = events.onSubmit;

class TodoList extends ElementArt {
  constructor() {
    super();
    this.styles = 'form > * { margin-right: 5px; }';
  }

  render() {
    const { div, h3, ul, form, label, input, button } = elements;

    const text = {
      h3: 'Todo', 
      label: 'What needs to be done?',
      button: 'Add #1'
    };

    setText(text, { h3, label, button });

    htmlFor(label, input, 'new-todo');

    form.append(label, input, button);

    onSubmit(form, (e) => {
      const todo = input.value;
      if (todo.length === 0) {
        return;
      }
      const item = li(todo);
      ul.append(item);
      
      button.innerText = `Add #${ul.childElementCount + 1}`;
      input.value = '';
    });

    div.append(h3, ul, form);

    return div;
  }
}

const todoList = makeArt('todo-list', TodoList);

export default todoList;
