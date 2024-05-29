import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main info form', () => {
  render(<App />);
  
  // Example: Look for text within a heading
  const headingElement = screen.getByRole('heading', { name: /Personal Info/i });
  expect(headingElement).toBeInTheDocument();
  
  // You can also use a custom query function to find specific text
  const nameInputLabel = screen.getByLabelText(/Name/i);
  expect(nameInputLabel).toBeInTheDocument();
});