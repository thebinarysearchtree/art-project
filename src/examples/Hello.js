import { makeArt, ElementArt, html } from 'artworkjs';

const { div } = html;

class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}

const helloWorld = makeArt('hello-world', HelloWorld);

export default helloWorld;
