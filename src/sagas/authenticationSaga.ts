import { call, fork, put, take } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  LOGOUT_SUCCESSFUL,
} from '../actions/authenticationAction';
import { history } from '../history';
import { loginUser, logoutUser } from '../api/IdentityApi';
import { LoginRequest } from '../models/requests/loginRequest';

export function* loginWorker(request: LoginRequest) {
  const { errorReason, status, ...user } = yield call(loginUser, request);
  try {
    if (errorReason) {
      const error = { statusCode: status, errorReason };
      yield put({ type: LOGIN_FAILURE, payload: error });
    } else {
      yield put({ type: LOGIN_SUCCESSFUL, payload: user });
      history.push('/');
    }
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: { statusCode: 500, errorReason: err.message },
    });
  }
}

export function* logoutWorker() {
  yield call(logoutUser);
  yield put({ type: LOGOUT_SUCCESSFUL });
}

export function* loginWatcher() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST);
    yield call(loginWorker, payload);
  }
}

export function* logoutWatcher() {
  while (true) {
    yield take(LOGOUT);
    yield call(logoutWorker);
  }
}
