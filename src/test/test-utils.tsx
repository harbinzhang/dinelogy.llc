import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'

interface AllTheProvidersProps {
  children: React.ReactNode
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }