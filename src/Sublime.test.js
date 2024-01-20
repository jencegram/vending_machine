import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Sublime from './Sublime';

test('renders Sublime component with correct content', () => {
  render(
    <MemoryRouter>
      <Sublime />
    </MemoryRouter>
  );

  // Header
  const headerElement = screen.getByRole('heading', { name: 'Sublime' });
  expect(headerElement).toBeInTheDocument();

  // 'Go back' link - if rendered and functional
  const goBackLink = screen.getByRole('link', { name: 'Go back' });
  expect(goBackLink).toBeInTheDocument();
  expect(goBackLink.getAttribute('href')).toBe('/');

  // Image is rendered with the correct alt text
  const sublimeImage = screen.getByAltText('Sublime');
  expect(sublimeImage).toBeInTheDocument();
});
