import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Alert from './Alert';

const errorMessage = 'Error message';
const mockFunction = jest.fn();

describe('Test the alert component', () => {
  test('It should display correctly', () => {
    render(<Alert message={errorMessage} close={mockFunction} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('it should have more than one error item if the error message has a comma in it', () => {
    const errorMessageWithCommas = 'This, is, an, error';
    render(<Alert message={errorMessageWithCommas} close={mockFunction} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });
});
