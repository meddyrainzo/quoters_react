import { call, put, take } from 'redux-saga/effects';
import {
  GET_QUOTES,
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
} from '../actions/quoteActions';
import * as service from '../api/QuotesApi';

function* getQuotes(currentPage?: number, resultsPerPage?: number) {
  try {
    const quotes = yield call(service.getQuotes, currentPage, resultsPerPage);
    yield put({ type: GET_QUOTES_SUCCESS, payload: quotes });
  } catch (error) {
    yield put({ type: GET_QUOTES_FAILURE, payload: error });
  }
}

export function* watchGetQuotes() {
  while (true) {
    const { payload } = yield take(GET_QUOTES);
    const { currentPage, resultsPerPage } = payload;
    yield call(getQuotes, currentPage, resultsPerPage);
  }
}
