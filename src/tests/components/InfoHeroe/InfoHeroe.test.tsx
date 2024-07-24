import { describe, expect, test } from 'vitest'
import { Heroe } from '../../../types/Heroe'
import { InfoHeroe } from '../../../components/InfoHeroe/InfoHeroe'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('test InfoHeroe component', () => {
  const heroe: Heroe = {
    id: 1,
    name: 'Adam warlock',
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    isFavorite: false,
    description:
      'Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe.',
  }

  test('should render the heroe name', () => {
    render(
      <MemoryRouter>
        <InfoHeroe heroe={heroe} />
      </MemoryRouter>,
    )
    const heroeName = screen.getByText(heroe.name)
    expect(heroeName).toBeInTheDocument()
  })

  test('should render the heroe image', () => {
    render(
      <MemoryRouter>
        <InfoHeroe heroe={heroe} />
      </MemoryRouter>,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', heroe.imageUrl)
    expect(img).toHaveAttribute('alt', heroe.name)
  })

  test('should render the hero description', () => {
    render(
      <MemoryRouter>
        <InfoHeroe heroe={heroe} />
      </MemoryRouter>,
    )
    const description = screen.getByText(heroe.description || '')
    expect(description).toBeInTheDocument()
  })
})
