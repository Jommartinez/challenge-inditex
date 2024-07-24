import { useCallback } from 'react'
import { getHeroes } from '../api/heroes'
import { Heroe } from '../types/Heroe'
import { HeroeFetch } from '../types/HeroesFetch'

const useFetchHeroes = () => {
  const fetchHeroes = useCallback(async (query: string) => {
    try {
      const response = await getHeroes(query, 50)
      const data: Heroe[] = response.map((heroe: HeroeFetch) => {
        return {
          id: heroe.id,
          name: heroe.name,
          description: heroe.description,
          imageUrl: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
          isFavorite: false,
        }
      })
      return data
    } catch (error) {
      console.error('useFetchHeroes', error)
      return []
    }
  }, [])

  return { fetchHeroes }
}

export default useFetchHeroes
