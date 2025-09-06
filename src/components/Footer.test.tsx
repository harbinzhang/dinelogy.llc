import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders footer content correctly', () => {
    render(<Footer />)
    
    expect(screen.getByText('Dinelogy')).toBeInTheDocument()
    expect(screen.getByText('Revolutionizing restaurant ordering with QR code technology.')).toBeInTheDocument()
    expect(screen.getByText('© Dinelogy LLC. All rights reserved.')).toBeInTheDocument()
  })

  it('displays section headers', () => {
    render(<Footer />)
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('More')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
  })

  it('shows placeholder quick links as non-clickable text', () => {
    render(<Footer />)
    
    // These should be spans, not links
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    
    // Verify they don't have href attributes
    expect(screen.getByText('About Us').closest('a')).toBeNull()
    expect(screen.getByText('Features').closest('a')).toBeNull()
    expect(screen.getByText('Pricing').closest('a')).toBeNull()
    expect(screen.getByText('Support').closest('a')).toBeNull()
  })

  it('renders active navigation links in More section', () => {
    render(<Footer />)
    
    // These should be actual links
    expect(screen.getByRole('link', { name: 'FAQS' })).toHaveAttribute('href', '#/faq')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#/privacy')
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toHaveAttribute('href', '#/terms')
  })

  it('displays contact information', () => {
    render(<Footer />)
    
    expect(screen.getByText('Email: info@dinelogy.com')).toBeInTheDocument()
    expect(screen.getByText('Address: 2108 N ST STE N')).toBeInTheDocument()
    expect(screen.getByText('Sacramento, CA 95816, USA')).toBeInTheDocument()
  })

  it('has proper layout structure', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-primary-700', 'text-white', 'py-8')
  })

  it('applies hover effects to active links', () => {
    render(<Footer />)
    
    const faqLink = screen.getByRole('link', { name: 'FAQS' })
    const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' })
    const termsLink = screen.getByRole('link', { name: 'Terms of Use' })
    
    expect(faqLink).toHaveClass('text-gray-300', 'hover:text-white', 'transition-colors')
    expect(privacyLink).toHaveClass('text-gray-300', 'hover:text-white', 'transition-colors')
    expect(termsLink).toHaveClass('text-gray-300', 'hover:text-white', 'transition-colors')
  })

  it('renders responsive grid layout', () => {
    render(<Footer />)
    
    // Check for grid classes that handle responsive layout
    const gridContainer = screen.getByRole('contentinfo').firstElementChild?.firstElementChild
    expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-8')
  })
})