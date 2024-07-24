import { useEffect, useState } from 'react'
import { ComicCard } from '../ComicCard/ComicCard'

import './ComicList.css'
import { Comic } from '../../types/Heroe'
import useFetchComics from '../../hooks/useFetchComics'

interface ComicListProps {
  id: string
}

export const ComicList = ({ id }: ComicListProps) => {
  const [comics, setComics] = useState<Comic[] | null>(null)

  const { fetchComics } = useFetchComics()

  useEffect(() => {
    const fetchComicsData = async () => {
      const data = await fetchComics(parseInt(id))
      setComics(data)
    }
    fetchComicsData()
  }, [id])

  return (
    <section className="comics">
      <h2 className="comics__title">Comics</h2>
      <div className="comics__list">
        {comics && comics?.length > 0 ? (
          comics?.map(comic => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              imageUrl={comic.imageUrl}
              year={comic.year}
            />
          ))
        ) : (
          <p>Loading comics...</p>
        )}
      </div>
    </section>
  )
}
