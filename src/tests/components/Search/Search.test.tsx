import { describe, expect, test } from 'vitest'
import { Search } from '../../../components/Search/Search'
import { render, screen } from '@testing-library/react'

describe('Test search component', () => {
  test('should render the search input', () => {
    render(<Search />)
    const input = screen.queryAllByTestId('search-input')
    expect(input).toHaveLength(1)
  })

  test('should render the search result', () => {
    render(<Search />)
    const result = screen.queryAllByTestId('search-result')
    expect(result).toHaveLength(1)
  })
})
