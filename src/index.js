import { Router, routerLink, ElementArt, makeArt, elements } from './artwork/index.js';
import hello from './examples/Hello.js';
import timer from './examples/Timer.js';
import todo from './examples/Todo.js';
import styles from './HomePage.css' assert { type: 'css' };

const root = document.getElementById('root');

const router = new Router(root);

const a = (href, text) => routerLink({ href, text });

class HomePage extends ElementArt {
  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  render() {
    const { div } = elements;

    const a1 = a('/hello?name=World', 'Hello World');
    const a2 = a('/timer', 'Timer');
    const a3 = a('/todo', 'Todo');

    div.append(a1, a2, a3);

    return div;
  }
}

const home = makeArt(HomePage);

router.add('/', () => home());
router.add('/hello', ({ name }) => hello(name));
router.add('/timer', () => timer());
router.add('/todo', () => todo());

Router.start();
