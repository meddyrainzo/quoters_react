import { all } from 'redux-saga/effects';
import { loginWatcher, logoutWatcher } from './authenticationSaga';
import { watchGetQuotes } from './getQuotesSaga';
import { reactToQuoteWatcher } from './reactToQuoteSaga';
import { registrationWatcher } from './registerSaga';

export default function* rootSaga() {
  yield all([
    watchGetQuotes(),
    registrationWatcher(),
    loginWatcher(),
    logoutWatcher(),
    reactToQuoteWatcher(),
  ]);
}
