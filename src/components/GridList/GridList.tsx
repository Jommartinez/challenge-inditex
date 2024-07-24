import { useEffect, useState } from 'react'
import { useHeroeContext } from '../../context/HeroeContext'
import { Heroe } from '../../types/Heroe'
import { HeroeCard } from '../HeroeCard/HeroeCard'
import './GridList.css'

export const GridList = () => {
  const [showListHeroes, setShowListHeroes] = useState<Heroe[]>([])

  const { heroesList, favorite, favoriteFilter, favoriteLayout } =
    useHeroeContext()

  useEffect(() => {
    if (favoriteLayout) {
      setShowListHeroes(favoriteFilter)
    } else {
      const newData: Heroe[] = heroesList.map((heroe: Heroe) => {
        return {
          ...heroe,
          isFavorite: favorite.some((fav: Heroe) => fav.id === heroe.id),
        }
      })
      setShowListHeroes(newData)
    }
  }, [heroesList, favorite, favoriteFilter, favoriteLayout])

  return (
    <>
      {showListHeroes.length > 0 ? (
        <section className="gridList">
          {showListHeroes.map((heroe: Heroe) => (
            <HeroeCard key={heroe.id} heroe={heroe} />
          ))}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
