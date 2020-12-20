import { ErrorResult } from '../models/errorResult';
import WriteAQuoteRequest from '../models/requests/writeAQuoteRequest';
import { SingleQuote } from '../models/singleQuote';
import { User } from '../models/user';

export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILURE = 'GET_QUOTES_FAILURE';
export const REACT_TO_QUOTE = 'REACT_TO_QUOTE';
export const REACT_TO_QUOTE_SUCCESS = 'REACT_TO_QUOTE_SUCCESS';
export const WRITE_A_QUOTE = 'WRITE_A_QUOTE';
export const WRITE_A_QUOTE_SUCCESS = 'WRITE_A_QUOTE_SUCCESS';
export const WRITE_A_QUOTE_FAILURE = 'WRITE_A_QUOTE_FAILURE';

type WriteAQuote = {
  type: typeof WRITE_A_QUOTE;
  payload: WriteAQuoteRequest;
};

type WriteAQuoteSuccess = {
  type: typeof WRITE_A_QUOTE_SUCCESS;
  payload: SingleQuote;
};

type WriteAQuoteFailure = {
  type: typeof WRITE_A_QUOTE_FAILURE;
  payload: ErrorResult;
};

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

export const writeAQuoteAction = (request: WriteAQuoteRequest): WriteAQuote => {
  return { type: WRITE_A_QUOTE, payload: request };
};

export type QuoteActionTypes =
  | GetQuotesSuccess
  | GetQuotesFailue
  | ReactToQuoteSuccess
  | WriteAQuoteSuccess
  | WriteAQuoteFailure;
