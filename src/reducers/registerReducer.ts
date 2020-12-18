import {
  RegisterAction,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESSFUL,
} from '../actions/registerActions';
import { ErrorResult } from '../models/errorResult';

export type RegisterState = {
  error?: ErrorResult;
};

export const registerReducer = (
  state: RegisterState = {},
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case REGISTRATION_FAILURE:
      return { error: action.error };
    case REGISTRATION_SUCCESSFUL:
    default:
      return state;
  }
};
