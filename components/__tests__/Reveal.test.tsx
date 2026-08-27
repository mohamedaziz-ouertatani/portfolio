import { render, screen } from '@testing-library/react';
import { Reveal } from '../ui/Reveal';

describe('Reveal', () => {
  it('renders its children', () => {
    render(
      <Reveal>
        <p>Hello world</p>
      </Reveal>
    );
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
