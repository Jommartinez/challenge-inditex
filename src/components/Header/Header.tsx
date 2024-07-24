import { useNavigate } from 'react-router-dom'
import logoMarvel from '../../assets/marvel-logo.svg'
import { HeartIcon } from '../HeartIcon/HeartIcon'

import './Header.css'
import { useHeroeContext } from '../../context/HeroeContext'

export const Header = () => {
  const { favWithFilter, setFavoriteLayout, heroFilter, favorite } =
    useHeroeContext()
  const navigate = useNavigate()

  const handleToggle = (isFav: boolean) => {
    setFavoriteLayout(isFav)

    if (isFav) {
      favWithFilter('')
    } else {
      heroFilter('')
    }

    if (window.location.pathname !== '/') {
      navigate('/')
    }
  }

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoMarvel}
        alt="Marvel"
        onClick={() => handleToggle(false)}
      />
      <div className="header__favs" onClick={() => handleToggle(true)}>
        <HeartIcon isSelected={true} />
        <span className="header__favs-value">{favorite?.length}</span>
      </div>
    </header>
  )
}
