import React, { FC, useEffect, useState } from 'react';

import sampleQuotes from '../../fake-server/sampleQuotes';
import { SingleQuote } from './models/singleQuote';
import Quote from './Quote';
import './QuoteList.scss';

const QuoteList: FC = () => {
  const [quotes, setQuotes] = useState(Array<SingleQuote>());
  useEffect(() => {
    setQuotes(sampleQuotes);
  }, []);

  const createQuotes = () =>
    quotes.map((quote) => (
      <Quote
        key={quote.id}
        id={quote.id}
        quote={quote.quote}
        author={quote.author}
        postedBy={quote.postedBy}
        postedOn={quote.postedOn}
        numberOfComments={quote.numberOfComments}
        numberOfLikes={quote.numberOfLikes}
        likedByYou={quote.likedByYou}
      />
    ));

  return <div className='quote-list'>{createQuotes()}</div>;
};

export default QuoteList;
