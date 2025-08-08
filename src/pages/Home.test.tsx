import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import Home from './Home'

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen
})

describe('Home Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders hero section with main headings', () => {
    render(<Home />)
    
    expect(screen.getByText('Restaurant Digitization Platform')).toBeInTheDocument()
    expect(screen.getByText('QR Ordering + Management System')).toBeInTheDocument()
    expect(screen.getByText(/Transform your restaurant experience/i)).toBeInTheDocument()
  })

  it('renders hero CTA buttons with correct functionality', async () => {
    render(<Home />)
    const user = userEvent.setup()
    
    // Use getAllByRole to get all matching buttons, then select the first ones (hero section)
    const allDashboardButtons = screen.getAllByRole('button', { name: /try restaurant dashboard/i })
    const allCustomerButtons = screen.getAllByRole('button', { name: /try customer app\(example\)/i })
    
    // Select the first dashboard button (hero section)
    const dashboardButton = allDashboardButtons[0]
    const customerButton = allCustomerButtons[0]
    
    expect(dashboardButton).toBeInTheDocument()
    expect(customerButton).toBeInTheDocument()
    
    // Test dashboard button
    await user.click(dashboardButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://dinelogy.app', '_blank')
    
    // Test customer app button
    await user.click(customerButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://order.dinelogy.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0', '_blank')
  })

  it('renders feature cards in Why Choose section', () => {
    render(<Home />)
    
    expect(screen.getByText('Why Restaurants Choose Dinelogy')).toBeInTheDocument()
    expect(screen.getByText('Easy Setup in 5 Minutes')).toBeInTheDocument()
    expect(screen.getByText('World-Class Cloud Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('24/7 Customer Support')).toBeInTheDocument()
    expect(screen.getByText('Free QR Code Plan')).toBeInTheDocument()
  })

  it('renders how it works section with numbered steps', () => {
    render(<Home />)
    
    expect(screen.getByText('See the Complete Platform in Action')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Dashboard Setup')).toBeInTheDocument()
    expect(screen.getByText('Customer QR Experience')).toBeInTheDocument()
    expect(screen.getByText('Live Order Management')).toBeInTheDocument()
    expect(screen.getByText('Integrated Communication')).toBeInTheDocument()
  })

  it('displays order status workflow in step 3', () => {
    render(<Home />)
    
    expect(screen.getByText('Pending')).toBeInTheDocument()
    expect(screen.getByText('Confirmed')).toBeInTheDocument()
    expect(screen.getByText('Ready')).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
  })

  it('renders reliability and security section', () => {
    render(<Home />)
    
    expect(screen.getByText('Built for Reliability and Security')).toBeInTheDocument()
    expect(screen.getByText('Reliable by Design')).toBeInTheDocument()
    expect(screen.getByText('Fast, Anywhere')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Security')).toBeInTheDocument()
  })

  it('renders final CTA section with buttons', async () => {
    render(<Home />)
    const user = userEvent.setup()
    
    expect(screen.getByText(/Try the Full Dinelogy Platform/i)).toBeInTheDocument()
    
    // Find buttons in the final CTA section (there are multiple with same text)
    const allDashboardButtons = screen.getAllByRole('button', { name: /try restaurant dashboard/i })
    const allCustomerButtons = screen.getAllByRole('button', { name: /try customer app\(example\)/i })
    
    // Test the final CTA buttons (last ones)
    const finalDashboardButton = allDashboardButtons[allDashboardButtons.length - 1]
    const finalCustomerButton = allCustomerButtons[allCustomerButtons.length - 1]
    
    // Clear previous mock calls
    mockWindowOpen.mockClear()
    
    await user.click(finalDashboardButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://dinelogy.app', '_blank')
    
    await user.click(finalCustomerButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://order.dinelogy.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0', '_blank')
  })

  it('includes external links for try links in how it works section', () => {
    render(<Home />)
    
    const dashboardLink = screen.getByRole('link', { name: /try restaurant dashboard/i })
    const customerLink = screen.getByRole('link', { name: /try customer app\(example\)/i })
    
    expect(dashboardLink).toHaveAttribute('href', 'https://dinelogy.app')
    expect(dashboardLink).toHaveAttribute('target', '_blank')
    expect(dashboardLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(customerLink).toHaveAttribute('href', 'https://order.dinelogy.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0')
    expect(customerLink).toHaveAttribute('target', '_blank')
    expect(customerLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has proper accessibility structure', () => {
    render(<Home />)
    
    // Check for proper heading hierarchy
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    
    // Check for sections
    const sections = document.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)
    
    // Check that buttons are focusable
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeVisible()
    })
  })

  it('displays feature descriptions correctly', () => {
    render(<Home />)
    
    expect(screen.getByText(/Get started fast — add tables, upload your menu/i)).toBeInTheDocument()
    expect(screen.getByText(/Fast, secure, and always on/i)).toBeInTheDocument()
    expect(screen.getByText(/Need help\? Our team is here anytime/i)).toBeInTheDocument()
    expect(screen.getByText(/Enjoy full access at no cost/i)).toBeInTheDocument()
  })

  it('displays step descriptions in how it works section', () => {
    render(<Home />)
    
    expect(screen.getByText(/Restaurant owners access the management dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/Customers scan QR codes to access/i)).toBeInTheDocument()
    expect(screen.getByText(/Orders appear instantly in the restaurant dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/Built-in messaging system allows customers/i)).toBeInTheDocument()
  })
})