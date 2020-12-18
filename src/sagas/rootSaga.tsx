import { all } from 'redux-saga/effects';
import { loginWatcher, logoutWatcher } from './authenticationSaga';
import { watchGetQuotes } from './quotesSaga';
import { registrationWatcher } from './registerSaga';

export default function* rootSaga() {
  yield all([
    watchGetQuotes(),
    registrationWatcher(),
    loginWatcher(),
    logoutWatcher(),
  ]);
}
