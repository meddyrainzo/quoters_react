import { LoginRequest } from '../models/requests/loginRequest';
import {
  clearLoginErrors,
  CLEAR_LOGIN_ERRORS,
  loginUserAction,
  LOGIN_REQUEST,
  LOGOUT,
  logoutUserAction,
} from './authenticationAction';

const loginRequest: LoginRequest = { email: 'email', password: 'password' };

describe('Testing the authentication action creators', () => {
  test('login action creator returns the right action', () => {
    const expectedAction = { type: LOGIN_REQUEST, payload: loginRequest };
    expect(loginUserAction(loginRequest)).toEqual(expectedAction);
  });

  test('The login action creator must return an action of type LoginUserAction', () => {
    const wrongAction = { type: LOGIN_REQUEST, request: loginRequest };
    expect(loginUserAction(loginRequest)).not.toEqual(wrongAction);
  });

  test('clear login errors action creator returns the right action', () => {
    const expectedAction = { type: CLEAR_LOGIN_ERRORS };
    expect(clearLoginErrors()).toEqual(expectedAction);
  });

  test('clear login errors action creator must return an action of type ClearLoginErrors', () => {
    const wrongAction = { type: 'WRONG_TYPE' };
    expect(clearLoginErrors()).not.toEqual(wrongAction);
  });

  test('logout user action creator returns the right action', () => {
    const expectedAction = { type: LOGOUT };
    expect(logoutUserAction()).toEqual(expectedAction);
  });

  test('logout user action must creator return an action of type ClearLoginErrors', () => {
    const wrongAction = { type: 'WRONG_TYPE' };
    expect(logoutUserAction()).not.toEqual(wrongAction);
  });
});
