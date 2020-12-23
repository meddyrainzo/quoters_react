import {
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
  QuoteActionTypes,
  REACT_TO_QUOTE_SUCCESS,
  WRITE_A_QUOTE_FAILURE,
  WRITE_A_QUOTE_SUCCESS,
} from '../actions/quoteActions';
import { ErrorResult } from '../models/errorResult';
import { SingleQuote } from '../models/singleQuote';

export type QuotesState = {
  quotes: SingleQuote[];
  error?: ErrorResult;
};

const initialState: QuotesState = { quotes: [] };

export const quotesReducer = (
  state = initialState,
  action: QuoteActionTypes
): QuotesState => {
  switch (action.type) {
    case GET_QUOTES_SUCCESS:
      return { ...state, quotes: action.payload.quotes };
    case GET_QUOTES_FAILURE:
      return { ...state, error: action.payload };
    case WRITE_A_QUOTE_SUCCESS:
      return { ...state, quotes: [action.payload, ...state.quotes] };
    case WRITE_A_QUOTE_FAILURE:
      return { ...state, error: action.payload };
    case REACT_TO_QUOTE_SUCCESS:
      return {
        ...state,
        quotes: state.quotes.map((quote) => {
          if (quote.id === action.quoteId) {
            return {
              ...quote,
              likedByYou: !quote.likedByYou,
              likesCount: quote.likedByYou
                ? quote.likesCount - 1
                : quote.likesCount + 1,
            };
          }
          return quote;
        }),
      };
    default:
      return state;
  }
};
