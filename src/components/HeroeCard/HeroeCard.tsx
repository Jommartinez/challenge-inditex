import { NavLink } from 'react-router-dom'
import useFav from '../../hooks/useFav'
import { HeartIcon } from '../HeartIcon/HeartIcon'
import { Heroe } from '../../types/Heroe'

import './HeroeCard.css'

interface HeroeCardProps {
  heroe: Heroe
}

export const HeroeCard = ({ heroe }: HeroeCardProps) => {
  const { toggleFav } = useFav()
  return (
    <article className="heroe-card">
      <NavLink
        to={`/heroe/${heroe.id}`}
        className="heroe-card__photo"
        state={heroe}
      >
        <img
          src={heroe.imageUrl}
          alt={heroe.name}
          className="heroe-card__photo-img"
        />
      </NavLink>
      <div className="heroe-card__info">
        <div className="heroe-card__line-top"></div>
        <p className="heroe-card__title">{heroe.name}</p>
        <button
          className="heroe-card__button"
          onClick={() => {
            toggleFav(heroe)
          }}
        >
          <HeartIcon isSelected={heroe.isFavorite} />
        </button>
      </div>
    </article>
  )
}
