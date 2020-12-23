import { call, put, takeLatest } from 'redux-saga/effects';
import {
  reactToQuoteAction,
  REACT_TO_QUOTE,
  REACT_TO_QUOTE_SUCCESS,
} from '../actions/quoteActions';
import { reactToQuote } from '../api/QuotesApi';

export function* reactToQuoteWorker({
  quoteId,
}: ReturnType<typeof reactToQuoteAction>) {
  const result = yield call(reactToQuote, quoteId);
  if (!result) {
    // It is supposed to return no content or an error. So if there is a result then it was an error
    yield put({ type: REACT_TO_QUOTE_SUCCESS, quoteId });
  }
}

export function* reactToQuoteWatcher() {
  yield takeLatest(REACT_TO_QUOTE, reactToQuoteWorker);
}
