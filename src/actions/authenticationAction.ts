import { ErrorResult } from '../models/errorResult';
import { LoginRequest } from '../models/requests/loginRequest';
import { User } from '../models/user';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';

export type LogoutUser = {
  type: typeof LOGOUT;
};

export type LogoutSuccesful = {
  type: typeof LOGOUT_SUCCESSFUL;
};

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

export const logoutUserAction = () => {
  return { type: LOGOUT };
};

export type AuthenticationAction =
  | LoginSuccessful
  | LoginFailure
  | LogoutSuccesful;
