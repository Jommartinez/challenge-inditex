import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heroe } from '../../../types/Heroe'
import { HeroeCard } from '../../../components/HeroeCard/HeroeCard'
import { MemoryRouter } from 'react-router-dom'

describe('test HeroeCard component', () => {
  const heroe: Heroe = {
    id: 1,
    name: 'Spider',
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    isFavorite: false,
    description: 'The Amazing Spider',
  }

  test('renders the heroe name in a p', () => {
    render(
      <MemoryRouter>
        <HeroeCard heroe={heroe} />
      </MemoryRouter>,
    )
    const heroeName = screen.getByText(heroe.name)
    expect(heroeName).toBeTruthy()
  })

  test('renders the heroe image', () => {
    render(
      <MemoryRouter>
        <HeroeCard heroe={heroe} />
      </MemoryRouter>,
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', heroe.imageUrl)
    expect(img).toHaveAttribute('alt', heroe.name)
  })
})
