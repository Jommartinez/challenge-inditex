export interface HeroeFetch {
  id: number
  name: string
  description?: string
  resourceURI: string
  comics: ComicsFetch
  thumbnail: {
    path: string
    extension: string
  }
}

export interface ComicsFetch {
  [x: string]: any
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
  year: string
  available: number
  dates: ComicDate[]
}

interface ComicDate {
  type: string
  date: string
}
