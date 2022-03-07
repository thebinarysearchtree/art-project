import { makeArt, ElementArt, html } from '../artwork/index.js';

const { div } = html;

class SecondsTimer extends ElementArt {
  render() {
    let seconds = 0;

    const root = div();

    const tick = () => {
      root.innerText = `Seconds: ${seconds}`;
      seconds++;
    };

    tick();

    this.connected = () => {
      const intervalId = setInterval(tick, 1000);
      return () => clearInterval(intervalId);
    };

    return root;
  }
}

const secondsTimer = makeArt(SecondsTimer);

export default secondsTimer;
