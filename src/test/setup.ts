import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn()
})

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(() => Promise.resolve({
      status: 200,
      text: 'OK'
    }))
  }
}))