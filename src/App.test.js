import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VendingMachine component on initial route', async () => {
  render(<App />);
  const h3Element = await screen.findByRole('heading', { level: 3 });
  expect(h3Element).toBeInTheDocument();
});


test('renders navigation links', async () => {
  render(<App />);
  const navigationLinks = screen.getAllByRole('link', { name: 'Tortrix', in: screen.getByRole('navigation') });
  expect(navigationLinks).toHaveLength(1);
});


