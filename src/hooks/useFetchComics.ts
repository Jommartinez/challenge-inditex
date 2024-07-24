import { getHeroeComics } from '../api/heroes'
import { Comic } from '../types/Heroe'
import { ComicsFetch } from '../types/HeroesFetch'

const useFetchComics = () => {
  const fetchComics = async (id: number) => {
    try {
      const response = await getHeroeComics(id)

      const data: Comic[] = response.map((comic: ComicsFetch) => {
        return {
          id: comic.id,
          title: comic.title,
          year: new Date(comic.dates[0].date).getFullYear().toString(),
          imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        }
      })

      return data
    } catch (error) {
      console.error('useFetchComic', error)
      return []
    }
  }

  return { fetchComics }
}

export default useFetchComics
