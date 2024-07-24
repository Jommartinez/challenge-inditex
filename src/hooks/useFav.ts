import { useContext } from 'react'
import { Heroe } from '../types/Heroe'
import { heroeContext } from '../context/HeroeContext'

const useFav = () => {
  const {
    heroesList,
    favorite,
    setFavorite,
    setHeroesList,
    setFavoriteFilter,
  } = useContext(heroeContext)

  const toggleFav = (heroe: Heroe): void => {
    let newList: Heroe[] = []
    const existInFavorite = favorite.some((fav: Heroe) => fav.id === heroe.id)

    if (existInFavorite) {
      heroe.isFavorite = false
      newList = favorite.filter((fav: Heroe) => fav.id !== heroe.id)
      setFavorite(newList)
      setFavoriteFilter(newList)
    } else {
      heroe.isFavorite = true
      const newFavHeroe = { ...heroe, isFavorite: true }
      newList = [...favorite, newFavHeroe]
      setFavorite(newList)
      setFavoriteFilter(newList)
    }

    const newHeroesList = heroesList.map((hero: Heroe) => {
      if (hero.id === heroe.id) {
        return heroe
      } else {
        return hero
      }
    })
    setHeroesList(newHeroesList)
  }

  return { toggleFav }
}

export default useFav
