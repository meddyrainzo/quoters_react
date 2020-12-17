import { SingleQuote } from '../models/singleQuote';

export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILURE = 'GET_QUOTES_FAILURE';

type GetQuotesAction = {
  type: typeof GET_QUOTES;
  payload: {
    currentPage?: number;
    resultsPerPage?: number;
  };
};

export const getQuotesAction = (
  currentPage?: number,
  resultsPerPage?: number
): GetQuotesAction => {
  return {
    type: GET_QUOTES,
    payload: {
      currentPage,
      resultsPerPage,
    },
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
  payload: any;
};

export type QuoteActionTypes = GetQuotesSuccess | GetQuotesFailue;