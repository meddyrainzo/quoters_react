import { all } from 'redux-saga/effects';
import { watchGetQuotes } from './quotesSaga';

export default function* rootSaga() {
  yield all([watchGetQuotes()]);
}
