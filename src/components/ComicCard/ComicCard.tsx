import { Comic } from '../../types/Heroe'
import './ComicCard.css'

export const ComicCard = ({ title, imageUrl, year }: Comic) => {
  return (
    <article className="comic">
      <img src={imageUrl} alt={title} className="comic__image"></img>
      <div className="comic__info">
        <h3 className="comic__title">{title}</h3>
        <p className="comic__year">{year}</p>
      </div>
    </article>
  )
}
