import {
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
  QuoteActionTypes,
} from '../actions/quoteActions';
import { SingleQuote } from '../models/singleQuote';

export type QuotesState = {
  quotes: SingleQuote[];
};

const initialState: QuotesState = { quotes: [] };

export const quotesReducer = (
  state = initialState,
  action: QuoteActionTypes
): QuotesState | any => {
  switch (action.type) {
    case GET_QUOTES_SUCCESS:
      return { ...state, quotes: [...state.quotes, ...action.payload.quotes] };
    case GET_QUOTES_FAILURE:
      console.log(
        `There was an error in retrieving the quotes :: ${JSON.stringify(
          action.payload
        )}`
      );
      return { ...action.payload };
    default:
      return state;
  }
};
