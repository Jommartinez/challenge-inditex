import { GridList } from '../../components/GridList/GridList'
import { Search } from '../../components/Search/Search'

import './Home.css'
import { useHeroeContext } from '../../context/HeroeContext'
export const Home = () => {
  const { favoriteLayout } = useHeroeContext()

  return (
    <div className="home">
      {favoriteLayout && <h2 className="home__title">Favorites</h2>}
      <Search />
      <GridList />
    </div>
  )
}
