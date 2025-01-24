import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders a header with a title', () => {
    render(<Header />);

    const headerElement = screen.getByText(/ZOOMIES/i);
    expect(headerElement).toBeInTheDocument();

  });
});

// Button.test.jsx
/* import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders a button and responds to clicks', () => {
    const handleClick = vi.fn(); // Use Vitest's vi.fn() to mock functions
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); */
