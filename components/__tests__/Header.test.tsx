import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: /primary/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^work$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /^contact$/i })
    ).toBeInTheDocument();
  });

  it('exposes a CV download that points at the real asset', () => {
    render(<Header />);

    const cv = screen.getAllByRole('link', { name: /cv/i })[0];
    expect(cv).toHaveAttribute('href', '/cv.pdf');
  });
});
