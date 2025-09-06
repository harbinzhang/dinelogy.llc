import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen
})

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders brand logo and navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Dinelogy')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Platform' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByRole('link', { name: 'Dinelogy' })).toHaveAttribute('href', '#/')
    expect(screen.getByRole('link', { name: 'Platform' })).toHaveAttribute('href', '#/')
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#/product')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#/contact')
  })

  it('opens external link when Get Started button is clicked', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    
    const getStartedButton = screen.getByRole('button', { name: 'Get Started' })
    await user.click(getStartedButton)
    
    expect(mockWindowOpen).toHaveBeenCalledWith('https://dinelogy.app', '_blank')
  })

  it('applies active styles to current route', () => {
    // This test would need to be updated based on current route
    // For now, testing that the component renders without errors
    render(<Navbar />)
    
    const platformLink = screen.getByRole('link', { name: 'Platform' })
    expect(platformLink).toHaveClass('text-primary-500', 'border-b-2', 'border-primary-500')
  })

  it('applies hover styles to inactive links', () => {
    render(<Navbar />)
    
    const featuresLink = screen.getByRole('link', { name: 'Features' })
    const contactLink = screen.getByRole('link', { name: 'Contact' })
    
    expect(featuresLink).toHaveClass('text-gray-700', 'hover:text-primary-400')
    expect(contactLink).toHaveClass('text-gray-700', 'hover:text-primary-400')
  })

  it('has proper accessibility attributes', () => {
    render(<Navbar />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // Check that all links are keyboard accessible
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toBeVisible()
    })
    
    const button = screen.getByRole('button', { name: 'Get Started' })
    expect(button).toBeVisible()
  })

  it('maintains proper layout structure', () => {
    render(<Navbar />)
    
    // Check that the navbar has the expected CSS classes for layout
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('bg-white', 'shadow-md')
  })
})