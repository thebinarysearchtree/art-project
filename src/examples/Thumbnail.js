import { routerLink, html } from 'artworkjs';
import styles from './thumbnail.css' with { type: 'css' };

const a = (href, text) => routerLink({ href, innerText: text ? text : null });

const thumbnail = (movie) => {
  const { root, thumbnail, details } = html.styled('div');

  const year = html.span(movie.year);
  
  const link = a(`/routes?v=${movie.id}`);

  const toggleSelected = (selectedId) => movie.id === selectedId ? root.className = 'root selected' : root.className = 'root';

  link.append(root);
  root.append(thumbnail, details);
  details.append(movie.name, year);

  return html.register({
    root: link,
    props: { toggleSelected },
    styles,
    name: 'movie-thumbnail'
  });
}

export default thumbnail;
