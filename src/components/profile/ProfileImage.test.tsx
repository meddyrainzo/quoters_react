import { render, screen } from '@testing-library/react';
import ProfileImage from './ProfileImage';

describe('Testing the profile image component', () => {
  test('It renders properly', () => {
    const initials = 'AB';
    render(<ProfileImage initials={initials} />);

    expect(screen.getByText(/AB/)).toBeInTheDocument();
  });
});
