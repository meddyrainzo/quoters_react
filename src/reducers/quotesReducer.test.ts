import { ErrorResult } from '../models/errorResult';
import { SingleQuote } from '../models/singleQuote';
import { quotesReducer, QuotesState } from './quotesReducer';

const postedBy = { firstname: 'firstname', lastname: 'lastname' };
const quotes: SingleQuote[] = [
  {
    id: 'id-1',
    quote: 'First quote',
    author: 'Author',
    postedBy,
    postedOn: 'Dec 1 2020',
    comments: 20,
    likesCount: 55,
    likedByYou: true,
  },
  {
    id: 'id-2',
    quote: 'Second quote',
    author: 'Author_2',
    postedBy,
    postedOn: 'Dec 1 2020',
    comments: 2,
    likesCount: 5,
    likedByYou: false,
  },
];

describe('Testing the quotes reducer', () => {
  test('GET_QUOTES_SUCCESS should put the quotes in the state', () => {
    expect(
      quotesReducer(undefined, {
        type: 'GET_QUOTES_SUCCESS',
        payload: { quotes },
      })
    ).toEqual({ quotes });
  });

  test('GET_QUOTES_SUCCESS should replace the quotes that was in the state', () => {
    const previousQuotes: SingleQuote[] = [
      {
        id: 'old',
        quote: 'Replace me',
        author: 'change',
        postedBy,
        postedOn: 'Nov 30 2020',
        comments: 1,
        likedByYou: false,
        likesCount: 1,
      },
    ];
    expect(
      quotesReducer(
        { quotes: previousQuotes },
        {
          type: 'GET_QUOTES_SUCCESS',
          payload: { quotes },
        }
      )
    ).toEqual({ quotes });
  });

  test('GET_QUOTES_FAILURE should add the error to the state', () => {
    const error: ErrorResult = { statusCode: 400, errorReason: 'reason' };
    expect(
      quotesReducer(undefined, { type: 'GET_QUOTES_FAILURE', payload: error })
    ).toEqual({ quotes: [], error });
  });

  test('WRITE_A_QUOTE_SUCCESS should add the new quote to the other quotes', () => {
    const initialState: QuotesState = { quotes };
    const newQuote: SingleQuote = {
      id: 'new',
      quote: 'Add me',
      author: 'keep',
      postedBy,
      postedOn: 'Dec 2 2020',
      comments: 1,
      likedByYou: false,
      likesCount: 1,
    };
    expect(
      quotesReducer(initialState, {
        type: 'WRITE_A_QUOTE_SUCCESS',
        payload: newQuote,
      })
    ).toEqual({ ...initialState, quotes: [newQuote, ...initialState.quotes] });
  });

  test('WRITE_A_QUOTE_SUCCESS should only add a quote of type SingleQuote to the quotes', () => {
    const initialState: QuotesState = { quotes };
    const newQuote: SingleQuote = {
      id: 'new',
      quote: 'Add me',
      author: 'keep',
      postedBy,
      postedOn: 'Dec 2 2020',
      comments: 1,
      likedByYou: false,
      likesCount: 1,
    };
    const trash = {};
    expect(
      quotesReducer(initialState, {
        type: 'WRITE_A_QUOTE_SUCCESS',
        payload: newQuote,
      })
    ).not.toEqual({ ...initialState, quotes: [trash, ...initialState.quotes] });
  });

  test('WRITE_A_QUOTE_FAILURE should add the errors to the state', () => {
    const error: ErrorResult = { statusCode: 400, errorReason: 'Hoobstank' };
    expect(
      quotesReducer(undefined, {
        type: 'WRITE_A_QUOTE_FAILURE',
        payload: error,
      })
    ).toEqual({ quotes: [], error });
  });

  test('REACT_TO_QUOTE_SUCCESS on a quote where likedByYou is false should increase the likes count and change likedByYou to true', () => {
    const state = quotesReducer(
      { quotes },
      { type: 'REACT_TO_QUOTE_SUCCESS', quoteId: 'id-2' }
    );
    expect(state.quotes[1].likedByYou).toBeTruthy();
    expect(state.quotes[1].likesCount).toBe(quotes[1].likesCount + 1);
  });

  test('REACT_TO_QUOTE_SUCCESS on a quote where likedByYou is true should decrease the likes count and change likedByYou to false', () => {
    const state = quotesReducer(
      { quotes },
      { type: 'REACT_TO_QUOTE_SUCCESS', quoteId: 'id-1' }
    );
    expect(state.quotes[0].likedByYou).toBeFalsy();
    expect(state.quotes[0].likesCount).toBe(quotes[0].likesCount - 1);
  });
});
