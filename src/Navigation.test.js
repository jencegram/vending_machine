import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

test('renders Navigation component with correct links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  const tortrixLink = screen.getByRole('link', { name: 'Tortrixs' });
  const jaritoLink = screen.getByRole('link', { name: 'Jarritos' });
  const sublimeLink = screen.getByRole('link', { name: 'Sublimes' });

  expect(tortrixLink).toBeInTheDocument();
  expect(jaritoLink).toBeInTheDocument();
  expect(sublimeLink).toBeInTheDocument();
});
