import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import {
  loginUserAction,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
  logoutUserAction,
  LOGOUT_SUCCESSFUL,
} from '../actions/authenticationAction';
import { loginUser, logoutUser } from '../api/IdentityApi';
import * as matchers from 'redux-saga-test-plan/matchers';
import { LoginRequest } from '../models/requests/loginRequest';
import { User } from '../models/user';
import { loginWorker, logoutWatcher } from './authenticationSaga';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

const loginRequest: LoginRequest = { email: 'fake@mail.com', password: 'Pass' };

describe('Testing authentication saga', () => {
  test('A successful login', () => {
    const user: User = {
      id: 'id',
      firstname: 'first',
      lastname: 'last',
      email: 'fake@mail.com',
      token: '23',
    };

    return expectSaga(loginWorker, loginRequest)
      .provide([[call(loginUser, loginRequest), user]])
      .put({ type: LOGIN_SUCCESSFUL, payload: user })
      .dispatch(loginUserAction(loginRequest))
      .run();
  });

  test('A failed login', () => {
    const error = { status: 400, errorReason: 'Failed' };
    return expectSaga(loginWorker, loginRequest)
      .provide([[matchers.call.fn(loginUser), error]])
      .put({
        type: LOGIN_FAILURE,
        payload: { statusCode: 400, errorReason: 'Failed' },
      })
      .dispatch(loginUserAction(loginRequest))
      .run();
  });

  test('A successful logout', () => {
    return expectSaga(logoutWatcher)
      .provide([[matchers.call.fn(logoutUser), undefined]])
      .put({ type: LOGOUT_SUCCESSFUL })
      .dispatch(logoutUserAction())
      .run();
  });
});
