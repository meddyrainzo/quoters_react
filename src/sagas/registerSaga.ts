import { call, put, take } from 'redux-saga/effects';
import {
  REGISTER_REQUEST,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESSFUL,
} from '../actions/registerActions';
import { RegisterRequest } from '../models/requests/regiterRequest';
import { registerUser } from '../api/IdentityApi';
import { history } from '../history';

export function* registrationWorker(request: RegisterRequest) {
  const registrationError = yield call(registerUser, request);

  if (registrationError) {
    const { status, errorReason } = registrationError;
    const error = { statusCode: status, errorReason };
    yield put({ type: REGISTRATION_FAILURE, error });
  } else {
    yield put({ type: REGISTRATION_SUCCESSFUL });
    history.push('/login');
  }
}

export function* registrationWatcher() {
  while (true) {
    const { payload } = yield take(REGISTER_REQUEST);
    yield call(registrationWorker, payload);
  }
}
