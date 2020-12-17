import { call, fork, put, take } from 'redux-saga/effects';
import {
  loginFailure,
  loginSuccessful,
  LOGIN_REQUEST,
} from '../actions/loginActions';
import { loginUser } from '../api/IdentityApi';
import { LoginRequest } from '../models/requests/loginRequest';

function* loginWorker(request: LoginRequest) {
  const { errorReason, status, ...user } = yield call(loginUser, request);
  if (errorReason) {
    yield put(loginFailure({ statusCode: status, errorReason }));
  } else {
    yield put(loginSuccessful(user));
  }
}

export function* loginWatcher() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST);
    yield fork(loginWorker, payload);
  }
}
