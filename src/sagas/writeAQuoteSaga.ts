import { call, put, take } from 'redux-saga/effects';
import {
  WRITE_A_QUOTE,
  WRITE_A_QUOTE_FAILURE,
  WRITE_A_QUOTE_SUCCESS,
} from '../actions/quoteActions';
import { writeAQuote } from '../api/QuotesApi';
import WriteAQuoteRequest from '../models/requests/writeAQuoteRequest';

export function* writeAQuoteWatcher() {
  const { payload } = yield take(WRITE_A_QUOTE);
  yield call(writeAQuoteWorker, payload);
}

export function* writeAQuoteWorker(request: WriteAQuoteRequest) {
  const { status, errorReason, ...quote } = yield call(writeAQuote, request);
  if (errorReason) {
    const error = { statusCode: status, errorReason };
    yield put({ type: WRITE_A_QUOTE_FAILURE, payload: error });
  } else {
    console.log('We in the house');
    yield put({ type: WRITE_A_QUOTE_SUCCESS, payload: quote });
  }
}
