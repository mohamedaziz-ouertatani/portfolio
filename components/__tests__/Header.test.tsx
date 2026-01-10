import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

jest.mock('../ThemeProvider', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })
})
