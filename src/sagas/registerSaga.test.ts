import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { cleanup } from '@testing-library/react';

import {
  registerAction,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESSFUL,
} from '../actions/registerActions';
import { registerUser } from '../api/IdentityApi';
import { RegisterRequest } from '../models/requests/regiterRequest';
import { registrationWorker } from './registerSaga';

const request: RegisterRequest = {
  firstname: 'first',
  lastname: 'last',
  email: 'fake@email.com',
  password: 'pass',
};

afterEach(cleanup);
describe('Testing register saga', () => {
  test('A successful registration', () => {
    return expectSaga(registrationWorker, request)
      .provide([[call(registerUser, request), undefined]])
      .put({ type: REGISTRATION_SUCCESSFUL })
      .dispatch(registerAction(request))
      .run();
  });

  test('Registration failure', () => {
    const error = { status: 400, errorReason: 'Reason' };
    const { status, errorReason } = error;
    return expectSaga(registrationWorker, request)
      .provide([[call(registerUser, request), error]])
      .put({
        type: REGISTRATION_FAILURE,
        error: { statusCode: status, errorReason },
      })
      .dispatch(registerAction(request))
      .run();
  });
});
