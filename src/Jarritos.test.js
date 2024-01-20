import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Jarritos from './Jarritos';
import jarritosImage from './images/jarritos.png';

test('renders Jarritos component with correct content', () => {
  render(
    <MemoryRouter>
      <Jarritos />
    </MemoryRouter>
  );

  // Header
  const headerElement = screen.getByRole('heading', { name: 'Jarritos' });
  expect(headerElement).toBeInTheDocument();

  // 'Go back' link - if rendered and functional
  const goBackLink = screen.getByRole('link', { name: 'Go back' });
  expect(goBackLink).toBeInTheDocument();
  expect(goBackLink.getAttribute('href')).toBe('/');

  // Image is rendered with the correct alt text
  const jarritosImageElement = screen.getByAltText('Jarritos'); // Updated variable name
  expect(jarritosImageElement).toBeInTheDocument();
  expect(jarritosImageElement).toHaveAttribute('src', jarritosImage); // Updated variable name
});
