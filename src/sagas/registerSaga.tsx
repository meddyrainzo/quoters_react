import { call, put, fork, take } from 'redux-saga/effects';
import {
  REGISTER_REQUEST,
  registrationFailure,
  registrationSuccessful,
} from '../actions/registerActions';
import { RegisterRequest } from '../models/requests/regiterRequest';
import { registerUser } from '../api/IdentityApi';

function* registrationWorker(request: RegisterRequest) {
  const { errorReason, status } = yield call(registerUser, request);
  if (errorReason) {
    yield put(registrationFailure({ statusCode: status, errorReason }));
  } else {
    yield put(registrationSuccessful());
  }
}

export function* registrationWatcher() {
  while (true) {
    const { payload } = yield take(REGISTER_REQUEST);
    yield call(registrationWorker, payload);
  }
}
