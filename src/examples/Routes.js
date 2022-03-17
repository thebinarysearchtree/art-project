import { makeAsyncArt, AsyncElementArt, html, divs, Router } from '../artwork/index.js';
import thumbnail from './Thumbnail.js';
import styles from './Routes.css' assert { type: 'css' };

const { h3 } = html;

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

class MovieRoutes extends AsyncElementArt {
  constructor() {
    super();
    this.styles = styles;
  }

  async render() {
    const { root, sidePanel, content, video } = divs;

    const movies = await getMovies();
    const thumbnails = movies.map(m => thumbnail(m));
    sidePanel.append(...thumbnails);

    this.connected = () => {
      const router = new Router();

      router.add('/routes', ({ v }) => {
        const videoId = parseInt(v, 10);
        const { name } = movies.find(m => m.id === videoId);

        thumbnails.forEach(t => t.toggleSelected(videoId));
        content.replaceChildren(video, h3(name));
      });
      
      router.start();
      return () => router.remove();
    }

    root.append(content, sidePanel);
    return root;
  }
}

const movieRoutes = makeAsyncArt(MovieRoutes, 'movie-routes');

export default movieRoutes;
