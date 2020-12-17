import { ErrorResult } from '../models/errorResult';
import { RegisterRequest } from '../models/requests/regiterRequest';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

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

export const registrationSuccessful = () => {
  return { type: REGISTRATION_SUCCESSFUL };
};

export const registrationFailure = (err: ErrorResult) => {
  return { type: REGISTRATION_FAILURE, err };
};

export type RegisterAction = RegistrationSuccessful | RegistrationFailed;
