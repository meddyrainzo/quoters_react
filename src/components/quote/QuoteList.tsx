import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuotesAction } from '../../actions/quoteActions';
import { getCurrentUser } from '../../api/IdentityApi';
import { SingleQuote } from '../../models/singleQuote';

import { Rootstate } from '../../reducers/reducer';
import Quote from './Quote';
import './QuoteList.scss';

const QuoteList: FC = () => {
  const quotes = useSelector((state: Rootstate) => state.quotes.quotes);
  const currentUser = getCurrentUser();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotesAction(currentUser, 0, 2));
  }, [dispatch]);

  const createQuotes = () => {
    if (!quotes) {
      const noQuotes =
        'There are currently no quotes. Please register and sign in to add quotes';
      return <div className='no-quotes'>{noQuotes}</div>;
    }

    return quotes.map((q: SingleQuote) => {
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
  };

  return <div className='quote-list'>{createQuotes()}</div>;
};

export default QuoteList;
