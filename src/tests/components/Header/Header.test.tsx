import { describe, test, expect } from 'vitest'
import { Header } from '../../../components/Header/Header'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Test header component', () => {
  test('should render the header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Marvel')
  })

  test('should render the selected HeartIcon', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    const heartIcon = screen.getByTestId('selected-heart-icon')
    expect(heartIcon).toBeInTheDocument()
  })

  test('should navitage to the home when click the Logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    const logo = screen.getByAltText('Marvel')
    fireEvent.click(logo)
    expect(window.location.pathname).toBe('/')
  })
})
