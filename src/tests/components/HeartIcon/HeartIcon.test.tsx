import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeartIcon } from '../../../components/HeartIcon/HeartIcon'

describe('Test HeartIcon component', () => {
  test('should render an selected heart icon', () => {
    render(<HeartIcon isSelected={true} />)
    const heartIcon = screen.getByTestId('selected-heart-icon')
    expect(heartIcon).not.toBeNull()
  })

  test('should render a unselected heart icon', () => {
    render(<HeartIcon isSelected={false} />)
    const heartIcon = screen.getByTestId('unselected-heart-icon')
    expect(heartIcon).not.toBeNull()
  })
})
