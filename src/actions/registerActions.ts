import { ErrorResult } from '../models/errorResult';
import { RegisterRequest } from '../models/requests/regiterRequest';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const CLEAR_REGISTRATION_ERRORS = 'CLEAR_REGISTRATION_ERRORS';

type ClearRegistrationErrors = {
  type: typeof CLEAR_REGISTRATION_ERRORS;
};

type RegisterUserAction = {
  type: typeof REGISTER_REQUEST;
  payload: RegisterRequest;
};

type RegistrationSuccessful = {
  type: typeof REGISTRATION_SUCCESSFUL;
};

type RegistrationFailed = {
  type: typeof REGISTRATION_FAILURE;
  error: ErrorResult;
};

// Action creators

export const registerAction = (
  request: RegisterRequest
): RegisterUserAction => {
  return { type: REGISTER_REQUEST, payload: request };
};

export const clearRegistrationErrors = (): ClearRegistrationErrors => {
  return { type: CLEAR_REGISTRATION_ERRORS };
};

export type RegisterAction =
  | RegistrationSuccessful
  | RegistrationFailed
  | ClearRegistrationErrors;
