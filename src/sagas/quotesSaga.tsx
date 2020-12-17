import { call, put, take } from 'redux-saga/effects';
import {
  getQuotesFailure,
  getQuotesSuccessful,
  GET_QUOTES,
} from '../actions/quoteActions';
import * as service from '../api/QuotesApi';

function* getQuotes(currentPage?: number, resultsPerPage?: number) {
  try {
    const quotes = yield call(service.getQuotes, currentPage, resultsPerPage);
    yield put(getQuotesSuccessful(quotes));
  } catch (error) {
    yield put(getQuotesFailure(error));
  }
}

export function* watchGetQuotes() {
  while (true) {
    const { payload } = yield take(GET_QUOTES);
    const { currentPage, resultsPerPage } = payload;
    yield call(getQuotes, currentPage, resultsPerPage);
  }
}
