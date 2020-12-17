import { call, fork, put, take } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
} from '../actions/loginActions';
import { loginUser } from '../api/IdentityApi';
import { LoginRequest } from '../models/requests/loginRequest';

function* loginWorker(request: LoginRequest) {
  const { errorReason, status, ...user } = yield call(loginUser, request);
  if (errorReason) {
    const error = { statusCode: status, errorReason };
    yield put({ type: LOGIN_FAILURE, payload: error });
  } else {
    yield put({ type: LOGIN_SUCCESSFUL, payload: user });
  }
}

export function* loginWatcher() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST);
    yield fork(loginWorker, payload);
  }
}
