import { makeArt, ElementArt, elements } from '../artwork/index.js';

class SecondsTimer extends ElementArt {
  render() {
    let seconds = 0;

    const { div } = elements;

    const tick = () => {
      div.innerText = `Seconds: ${seconds}`;
      seconds++;
    };

    tick();

    this.connected = () => {
      const intervalId = setInterval(tick, 1000);
      return () => clearInterval(intervalId);
    };

    return div;
  }
}

const secondsTimer = makeArt(SecondsTimer, 'seconds-timer');

export default secondsTimer;
