import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import VendingMachine from './VendingMachine';

test('renders VendingMachine component with correct elements and snack list', () => {
  render(
    <Router> {/* Wrap your component in Router */}
      <VendingMachine />
    </Router>
  );

  // Check if the h3 element is rendered
  const h3Element = screen.getByRole('heading', { level: 3 });
  expect(h3Element).toBeInTheDocument();

  // Check if the h4 element is rendered
  const h4Element = screen.getByRole('heading', { level: 4 });
  expect(h4Element).toBeInTheDocument();

  // Check if the h5 element is rendered
  const h5Element = screen.getByRole('heading', { level: 5 });
  expect(h5Element).toBeInTheDocument();

  // Check if the list of snacks is rendered
  const snacksList = screen.getByText('Snacks available:');
  expect(snacksList).toBeInTheDocument();

  // Check if each snack name is present in the list
  const snackNames = ['Tortrix', 'Jarito', 'Sublime'];
  snackNames.forEach((name) => {
    const linkElement = screen.getByText(name);
    expect(linkElement).toBeInTheDocument();
  });
});