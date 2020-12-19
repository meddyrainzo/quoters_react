import { ErrorResult } from '../models/errorResult';
import { SingleQuote } from '../models/singleQuote';
import { User } from '../models/user';

export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILURE = 'GET_QUOTES_FAILURE';
export const REACT_TO_QUOTE = 'REACT_TO_QUOTE';
export const REACT_TO_QUOTE_SUCCESS = 'REACT_TO_QUOTE_SUCCESS';

type GetQuotesAction = {
  type: typeof GET_QUOTES;
  payload: {
    currentUser?: User;
    currentPage?: number;
    resultsPerPage?: number;
  };
};

type GetQuotesSuccess = {
  type: typeof GET_QUOTES_SUCCESS;
  payload: {
    quotes: SingleQuote[];
  };
};

type GetQuotesFailue = {
  type: typeof GET_QUOTES_FAILURE;
  payload: ErrorResult;
};

export type ReactToQuote = {
  type: typeof REACT_TO_QUOTE;
  quoteId: string;
};

export type ReactToQuoteSuccess = {
  type: typeof REACT_TO_QUOTE_SUCCESS;
  quoteId: string;
};

// Action creators
export const getQuotesAction = (
  currentUser?: User,
  currentPage?: number,
  resultsPerPage?: number
): GetQuotesAction => {
  return {
    type: GET_QUOTES,
    payload: {
      currentUser,
      currentPage,
      resultsPerPage,
    },
  };
};

export const reactToQuoteAction = (quoteId: string): ReactToQuote => {
  return { type: REACT_TO_QUOTE, quoteId };
};

export type QuoteActionTypes =
  | GetQuotesSuccess
  | GetQuotesFailue
  | ReactToQuoteSuccess;
