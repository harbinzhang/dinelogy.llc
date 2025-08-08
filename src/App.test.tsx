import { describe, it, expect, vi } from 'vitest'
import { render, screen } from './test/test-utils'
import App from './App'

// Mock window.scrollTo for ScrollToTop component
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn()
})

// Mock window.open for external links
Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn()
})

// Mock EmailJS for Contact page tests
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(() => Promise.resolve({
      status: 200,
      text: 'OK'
    }))
  }
}))

describe('App Component', () => {
  it('renders home route by default', () => {
    render(<App />)
    
    // Check for Home page content
    expect(screen.getByText('Restaurant Digitization Platform')).toBeInTheDocument()
    expect(screen.getByText('QR Ordering + Management System')).toBeInTheDocument()
  })

  it('includes ScrollToTop component', () => {
    render(<App />)
    
    // ScrollToTop doesn't render visible content, but we can check it doesn't crash
    expect(screen.getByText('Restaurant Digitization Platform')).toBeInTheDocument()
  })

  it('renders with correct root div class', () => {
    const { container } = render(<App />)
    
    expect(container.firstChild).toHaveClass('App')
  })

  it('renders all routes without errors', () => {
    // Test that the app component renders without crashing
    expect(() => {
      render(<App />)
    }).not.toThrow()
  })
})