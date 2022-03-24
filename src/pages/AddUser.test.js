import { render, screen } from '@testing-library/react';
import AddUser from './AddUser';

test('renders form correctly', () => {
  render(<AddUser />);
  const nameLabelElement = screen.getByText(/Name/i);
  expect(nameLabelElement).toBeInTheDocument();
  const emailLabelElement = screen.getByText(/Email/i);
  expect(emailLabelElement).toBeInTheDocument();
});
