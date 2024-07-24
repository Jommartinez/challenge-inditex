import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ComicList } from '../../components/ComicList/ComicList'
import { InfoHeroe } from '../../components/InfoHeroe/InfoHeroe'
import { Heroe } from '../../types/Heroe'

export const Detail = () => {
  const [heroe, setHeroe] = useState<Heroe>()
  const location = useLocation()

  useEffect(() => {
    const infoHeroe: Heroe = location.state as Heroe
    if (infoHeroe) {
      setHeroe(infoHeroe)
      return
    }
  }, [location.state])

  if (!heroe) {
    return null
  }

  return (
    <div className="detail">
      <InfoHeroe heroe={heroe} />
      <ComicList id={heroe.id.toString()} />
    </div>
  )
}
