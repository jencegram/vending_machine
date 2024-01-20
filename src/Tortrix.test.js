import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Tortrix from './Tortrix';

test('renders Tortrix component with correct content', () => {
  render(
    <MemoryRouter>
      <Tortrix />
    </MemoryRouter>
  );

  // Header
  const headerElement = screen.getByRole('heading', { name: 'Tortrix' });
  expect(headerElement).toBeInTheDocument();

  // 'Go back' link - if rendered and functional
  const goBackLink = screen.getByRole('link', { name: 'Go back' });
  expect(goBackLink).toBeInTheDocument();
  expect(goBackLink.getAttribute('href')).toBe('/');

  // Image is rendered 
  const tortrixImage = screen.getByAltText('Tortrix');
  expect(tortrixImage).toBeInTheDocument();
});
