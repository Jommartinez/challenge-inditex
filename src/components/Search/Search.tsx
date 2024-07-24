import './Search.css'
import searchIcon from '../../assets/search-icon.svg'
import { useHeroeContext } from '../../context/HeroeContext'

export const Search = () => {
  const {
    heroesList,
    favoriteFilter,
    favoriteLayout,
    heroFilter,
    favWithFilter,
    filterName,
    setFilterName,
  } = useHeroeContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueSearch = e.target.value
    setFilterName(valueSearch)

    setTimeout(() => {
      if (favoriteLayout) {
        favWithFilter(valueSearch)
      } else {
        heroFilter(valueSearch)
      }
    }, 300)
  }
  return (
    <section className="search">
      <div className="search__container">
        <label className="search__label" htmlFor="search">
          <img className="search__icon" src={searchIcon} alt="" />
        </label>
        <input
          data-testid="search-input"
          className="search__input"
          type="text"
          id="search"
          placeholder="Search a character..."
          onChange={handleChange}
          value={filterName}
        />
      </div>
      <p className="search__result" data-testid="search-result">
        {favoriteLayout ? favoriteFilter.length : heroesList.length} RESULTS
      </p>
    </section>
  )
}
