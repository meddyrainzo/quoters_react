import { call, put, take } from 'redux-saga/effects';
import {
  GET_QUOTES,
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
} from '../actions/quoteActions';
import * as service from '../api/QuotesApi';
import { User } from '../models/user';

function* getQuotes(
  currentUser?: User,
  currentPage?: number,
  resultsPerPage?: number
) {
  const { errorReason, status, ...quotes } = yield call(
    service.getQuotes,
    currentUser,
    currentPage,
    resultsPerPage
  );
  if (errorReason) {
    const error = { statusCode: status, errorReason };
    yield put({ type: GET_QUOTES_FAILURE, payload: error });
  }
  yield put({ type: GET_QUOTES_SUCCESS, payload: quotes });
}

export function* watchGetQuotes() {
  while (true) {
    const { payload } = yield take(GET_QUOTES);
    const { currentUser, currentPage, resultsPerPage } = payload;
    yield call(getQuotes, currentUser, currentPage, resultsPerPage);
  }
}
