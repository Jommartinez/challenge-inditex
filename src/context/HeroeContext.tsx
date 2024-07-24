import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Heroe } from '../types/Heroe'
import useFetchHeroes from '../hooks/useFetchHeroes'

interface HeroeContextProps {
  heroesList: Heroe[]
  favorite: Heroe[]
  favoriteFilter: Heroe[]
  favoriteLayout: boolean
  filterName: string
  setHeroesList: (heroes: Heroe[]) => void
  setFavorite: (heroes: Heroe[]) => void
  setFavoriteFilter: (heroes: Heroe[]) => void
  setFavoriteLayout: (layout: boolean) => void
  fetchHeroes: (query: string) => Heroe[] | Promise<Heroe[]>
  favWithFilter: (query: string) => void
  heroFilter: (query: string) => void
  setFilterName: (name: string) => void
}

export const heroeContext = createContext<HeroeContextProps>({
  heroesList: [],
  favoriteFilter: [],
  favorite: [],
  favoriteLayout: false,
  filterName: '',
  setHeroesList: () => {},
  setFavorite: () => {},
  setFavoriteFilter: () => {},
  setFavoriteLayout: () => {},
  fetchHeroes: () => [],
  favWithFilter: () => {},
  heroFilter: () => {},
  setFilterName: () => {},
})

export const HeroeProvider = ({ children }: { children: ReactNode }) => {
  const [heroesList, setHeroesList] = useState<Heroe[]>([])
  const [favorite, setFavorite] = useState<Heroe[]>([])
  const [favoriteFilter, setFavoriteFilter] = useState<Heroe[]>([])
  const [favoriteLayout, setFavoriteLayout] = useState<boolean>(false)
  const [filterName, setFilterName] = useState<string>('')

  const { fetchHeroes } = useFetchHeroes()

  useEffect(() => {
    const fetchHeroesData = async () => {
      const heroes = await fetchHeroes('')
      setHeroesList(heroes)
    }

    fetchHeroesData()
  }, [fetchHeroes])

  const favWithFilter = useCallback(
    (query: string) => {
      if (query === '') {
        setFavoriteFilter(favorite)
        return
      } else {
        const filteredList = favorite.filter(fav => {
          return fav.name.toLowerCase().includes(query.toLowerCase())
        })
        setFavoriteFilter(filteredList)
      }
    },
    [favorite],
  )

  const heroFilter = useCallback(
    (query: string) => {
      const loadHeros = async () => {
        const heroData = await fetchHeroes(query)
        setHeroesList(heroData)
      }

      loadHeros()
    },
    [fetchHeroes, setHeroesList],
  )

  const value = {
    heroesList,
    favorite,
    favoriteFilter,
    favoriteLayout,
    filterName,
    setHeroesList,
    setFavorite,
    setFavoriteFilter,
    setFavoriteLayout,
    fetchHeroes,
    favWithFilter,
    heroFilter,
    setFilterName,
  }

  return <heroeContext.Provider value={value}>{children}</heroeContext.Provider>
}

export const useHeroeContext = () => useContext(heroeContext)
