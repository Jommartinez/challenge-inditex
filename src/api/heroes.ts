import { ComicsFetch, HeroeFetch } from '../types/HeroesFetch'

const url = (slug: string) =>
  `https://gateway.marvel.com/v1/public/${slug}?ts=1&apikey=f7e97c0718d1ae5ed46c523cd3314df5&hash=290f7e964b07ee431f314d276c8d429b`

export const getHeroes = (name: string, limit: number) => {
  const api = url('characters')
  const query = name ? `&nameStartsWith=${name}` : ''

  return fetch(`${api}&limit=${limit}${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => response?.data?.results as HeroeFetch[])
}

export const getHeroeById = (id: number) => {
  const api = url(`characters/${id}`)

  return fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => response?.data?.results as HeroeFetch)
}

export const getHeroeComics = (id: number) => {
  const api = url(`characters/${id}/comics`)
  const query = `&limit=20&orderBy=onsaleDate`

  return fetch(`${api}${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => response?.data?.results as ComicsFetch)
}
