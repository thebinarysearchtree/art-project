import { Router, routerLink, ElementArt, makeArt, elements, html } from 'artworkjs';
import hello from './examples/Hello.js';
import timer from './examples/Timer.js';
import todo from './examples/Todo.js';
import routes from './examples/Routes.js';
import styles from './HomePage.css' assert { type: 'css' };

const root = document.getElementById('root');

const router = new Router(root);

const { div } = html;

const a = (href, text) => routerLink({ href, text });

class HomePage extends ElementArt {
  constructor() {
    super();
    this.styles = styles;
  }

  render() {
    const { div } = elements;

    const a1 = a('/hello?name=World', 'Hello World');
    const a2 = a('/timer', 'Timer');
    const a3 = a('/todo', 'Todo');
    const a4 = a('/routes?v=1', 'Routes');

    div.append(a1, a2, a3, a4);

    return div;
  }
}

const home = makeArt('home-page', HomePage);

router.add('/', () => home());
router.add('/hello', ({ name }) => hello(name));
router.add('/timer', () => timer());
router.add('/todo', () => todo());
router.add(/\/routes/, () => {
  const loading = div('Loading...');
  routes().then((r) => loading.replaceWith(r));
  return loading;
});

router.start();
