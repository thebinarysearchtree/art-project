import { makeArt, ElementArt, html } from '../artwork/index.js';

const { div } = html;

class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}

const helloWorld = makeArt(HelloWorld, 'hello-world');

export default helloWorld;
