import { ErrorResult } from '../models/errorResult';
import { LoginRequest } from '../models/requests/loginRequest';
import { User } from '../models/user';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

type LoginUserAction = {
  type: typeof LOGIN_REQUEST;
  payload: LoginRequest;
};

type LoginSuccessful = {
  type: typeof LOGIN_SUCCESSFUL;
  payload: User;
};

type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: ErrorResult;
};

// Action creators
export const loginUserAction = (request: LoginRequest): LoginUserAction => {
  return { type: LOGIN_REQUEST, payload: request };
};

export const loginSuccessful = (response: User): LoginSuccessful => {
  return { type: LOGIN_SUCCESSFUL, payload: response };
};

export const loginFailure = (error: ErrorResult): LoginFailure => {
  return { type: LOGIN_FAILURE, payload: error };
};

export type LoginAction = LoginSuccessful | LoginFailure;
