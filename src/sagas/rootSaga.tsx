import { all } from 'redux-saga/effects';
import { loginWatcher } from './loginSaga';
import { watchGetQuotes } from './quotesSaga';
import { registrationWatcher } from './registerSaga';

export default function* rootSaga() {
  yield all([watchGetQuotes(), registrationWatcher(), loginWatcher()]);
}
