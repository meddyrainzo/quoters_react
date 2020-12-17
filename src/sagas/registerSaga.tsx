import { call, put, fork, take } from 'redux-saga/effects';
import {
  REGISTER_REQUEST,
  registrationFailure,
  registrationSuccessful,
} from '../actions/registerActions';
import { RegisterRequest } from '../models/regiterRequest';
import { registerUser } from '../api/IdentityApi';

function* registrationWorker(request: RegisterRequest) {
  try {
    yield call(registerUser, request);
    yield put(registrationSuccessful());
  } catch (err) {
    yield put(registrationFailure(err));
  }
}

export function* registrationWatcher() {
  while (true) {
    const { payload } = yield take(REGISTER_REQUEST);
    console.log(`Got the request to register`);
    yield call(registrationWorker, payload);
  }
}
