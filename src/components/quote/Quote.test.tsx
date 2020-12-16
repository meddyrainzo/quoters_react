import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Quote from './Quote';
import sampleQuotes from '../../fake-server/sampleQuotes';

describe('Testing the quote component', () => {
  test('the quote component should render properly', () => {
    const firstQuote = sampleQuotes[0];
    render(
      <Quote
        id={firstQuote.id}
        quote={firstQuote.quote}
        author={firstQuote.author}
        postedBy={firstQuote.postedBy}
        postedOn={firstQuote.postedOn}
        comments={firstQuote.numberOfComments}
        likesCount={firstQuote.numberOfLikes}
        likedByYou={firstQuote.likedByYou}
      />
    );

    expect(screen.getByText('- Arthur')).toBeInTheDocument();
  });
});
