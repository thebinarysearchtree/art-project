import { html } from 'artworkjs';

const timer = () => {
  let seconds = 0;

  const div = html.create('div');

  const tick = () => {
    div.innerText = `Seconds: ${seconds}`;
    seconds++;
  };

  tick();

  const connected = () => {
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  };

  return html.register({
    root: div,
    connected,
    name: 'seconds-timer'
  });
}

export default timer;
