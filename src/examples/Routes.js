import { html, Router } from 'artworkjs';
import thumbnail from './thumbnail.js';
import styles from './routes.css' assert { type: 'css' };

const movies = [
  {
    id: 1,
    name: 'Star Wars - A New Hope',
    year: 1977
  },
  {
    id: 2,
    name: 'Star Wars - The Empire Strikes Back',
    year: 1980
  },
  {
    id: 3,
    name: 'Star Wars - Return of the Jedi',
    year: 1983
  }
];

const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(movies), 1000);
  });
}

const routes = async () => {
  const { root, sidePanel, content, video } = html.createStyled('div');

  const movies = await getMovies();
  const thumbnails = movies.map(m => thumbnail(m));
  sidePanel.append(...thumbnails);

  const connected = () => {
    const router = new Router();

    router.add('/routes', ({ v }) => {
      const videoId = parseInt(v, 10);
      const movie = movies.find(m => m.id === videoId);

      thumbnails.forEach(t => t.toggleSelected(videoId));

      const title = html.create('h3', movie.name);
      content.replaceChildren(video, title);
    });
    
    router.start();
    return () => router.remove();
  }

  root.append(content, sidePanel);

  return html.register({
    root,
    connected,
    styles,
    name: 'movie-routes'
  });
}

export default routes;
