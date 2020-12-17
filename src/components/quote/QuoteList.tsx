import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuotesAction } from '../../actions/quoteActions';
import { SingleQuote } from '../../models/singleQuote';

import { Rootstate } from '../../reducers/reducer';
import Quote from './Quote';
import './QuoteList.scss';

const QuoteList: FC = () => {
  const quotes = useSelector((state: Rootstate) => state.quotes.quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotesAction(0, 2));
  }, [dispatch]);

  const createQuotes = () =>
    quotes.map((q: SingleQuote) => {
      const {
        id,
        quote,
        author,
        postedBy,
        postedOn,
        comments,
        likesCount,
        likedByYou,
      } = q;
      return (
        <Quote
          key={id}
          id={id}
          quote={quote}
          author={author}
          postedBy={postedBy}
          postedOn={postedOn}
          comments={comments}
          likesCount={likesCount}
          likedByYou={likedByYou}
        />
      );
    });

  return <div className='quote-list'>{quotes && createQuotes()}</div>;
};

export default QuoteList;
