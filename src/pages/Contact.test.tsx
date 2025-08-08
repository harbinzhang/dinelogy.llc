import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import emailjs from '@emailjs/browser'

vi.mock('@emailjs/browser')

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders contact form and information', () => {
    render(<Contact />)
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('Send us a Message')).toBeInTheDocument()
    
    // Check form fields
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('displays contact information correctly', () => {
    render(<Contact />)
    
    expect(screen.getByText('info@dinelogy.com')).toBeInTheDocument()
    expect(screen.getByText('support@dinelogy.com')).toBeInTheDocument()
    expect(screen.getByText('Dinelogy LLC')).toBeInTheDocument()
    expect(screen.getByText('2108 N ST STE N')).toBeInTheDocument()
    expect(screen.getByText('Sacramento, CA 95816')).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<Contact />)
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    // Try to submit empty form
    fireEvent.click(submitButton)
    
    // Check that form wasn't submitted (emailjs.send not called)
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('submits form successfully with valid data', async () => {
    const mockSend = vi.mocked(emailjs.send)
    mockSend.mockResolvedValueOnce({
      status: 200,
      text: 'OK'
    } as any)

    render(<Contact />)
    const user = userEvent.setup()
    
    // Fill out the form
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    await user.type(screen.getByLabelText('Message'), 'This is a test message')
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Check that emailjs.send was called with correct parameters
    await waitFor(() => {
      expect(mockSend).toHaveBeenCalledWith(
        'service_jt58xcc',
        'template_7ubacbu',
        expect.objectContaining({
          from_name: 'John Doe',
          from_email: 'john@example.com',
          subject: 'Test Subject',
          message: 'This is a test message',
          time: expect.any(String)
        }),
        'HuSbZhTdJFEUjaY2k'
      )
    })
    
    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('displays error message when submission fails', async () => {
    const mockSend = vi.mocked(emailjs.send)
    mockSend.mockRejectedValueOnce(new Error('Network error'))

    render(<Contact />)
    const user = userEvent.setup()
    
    // Fill out the form
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    await user.type(screen.getByLabelText('Message'), 'This is a test message')
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Check error message
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument()
    })
  })

  it('disables submit button while sending', async () => {
    const mockSend = vi.mocked(emailjs.send)
    mockSend.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({ status: 200, text: 'OK' } as any), 100))
    )

    render(<Contact />)
    const user = userEvent.setup()
    
    // Fill out the form
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    await user.type(screen.getByLabelText('Message'), 'This is a test message')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    // Submit the form
    await user.click(submitButton)
    
    // Check that button is disabled and shows "Sending..."
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled()
    })
  })

  it('validates email format', async () => {
    render(<Contact />)
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement
    
    // Test invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    expect(emailInput.validity.valid).toBe(false)
    
    // Test valid email
    fireEvent.change(emailInput, { target: { value: 'valid@email.com' } })
    expect(emailInput.validity.valid).toBe(true)
  })

  it('resets form after successful submission', async () => {
    const mockSend = vi.mocked(emailjs.send)
    mockSend.mockResolvedValueOnce({
      status: 200,
      text: 'OK'
    } as any)

    render(<Contact />)
    const user = userEvent.setup()
    
    // Fill out the form
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    await user.type(screen.getByLabelText('Message'), 'This is a test message')
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Wait for success
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
    
    // Check that form fields are cleared
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Subject')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })
})