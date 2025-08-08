import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import Product from './Product'

describe('Product Component', () => {
  it('renders product page content', () => {
    render(<Product />)
    
    expect(screen.getByText('Our Product')).toBeInTheDocument()
    expect(screen.getByText(/Discover the features and capabilities/i)).toBeInTheDocument()
  })
})