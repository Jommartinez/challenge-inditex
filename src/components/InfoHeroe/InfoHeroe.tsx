import useFav from '../../hooks/useFav'
import { Heroe } from '../../types/Heroe'
import { HeartIcon } from '../HeartIcon/HeartIcon'

import './InfoHeroe.css'

interface InfoHeroeProps {
  heroe: Heroe
}

export const InfoHeroe = ({ heroe }: InfoHeroeProps) => {
  const { toggleFav } = useFav()

  return (
    <section className="infoHeroe">
      <article className="infoHeroe__wrapper">
        <img
          className="infoHeroe__image"
          src={heroe?.imageUrl}
          alt={heroe?.name}
        />
        <div className="infoHeroe__info">
          <div className="infoHeroe__wrapper-title">
            <h1 className="infoHeroe__title">{heroe?.name}</h1>
            <button
              onClick={() => toggleFav(heroe)}
              className="infoHeroe__button"
            >
              <HeartIcon isSelected={heroe?.isFavorite} />
            </button>
          </div>
          <p className="infoHeroe__description">{heroe?.description}</p>
        </div>
      </article>
    </section>
  )
}
