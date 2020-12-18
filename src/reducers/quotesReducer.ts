import {
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
  QuoteActionTypes,
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
    default:
      return state;
  }
};
