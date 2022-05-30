import { makeArt, ElementArt, divs, routerLink, html } from 'artworkjs';
import styles from './Thumbnail.css' assert { type: 'css' };

const a = (href, text) => routerLink({ href, text: text ? text : null });
const span = html.span;

class MovieThumbnail extends ElementArt {
  constructor() {
    super();
    this.styles = styles;
  }

  render(movie) {
    const { root, thumbnail, details } = divs;

    const { id, name, year } = movie;

    this.toggleSelected = (selectedId) => selectedId === id ? root.className = 'root selected' : root.className = 'root';
    
    details.append(name, span(year));
    root.append(thumbnail, details);

    const link = a(`/routes?v=${id}`);
    link.append(root);

    return link;
  }
}

const thumbnail = makeArt('movie-thumbnail', MovieThumbnail);

export default thumbnail;
