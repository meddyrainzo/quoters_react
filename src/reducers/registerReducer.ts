import {
  CLEAR_REGISTRATION_ERRORS,
  RegisterAction,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESSFUL,
} from '../actions/registerActions';
import { ErrorResult } from '../models/errorResult';

export type RegisterState = {
  error?: ErrorResult;
};

const initialState: RegisterState = {};

export const registerReducer = (
  state: RegisterState = initialState,
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case REGISTRATION_FAILURE:
      return { error: action.error };
    case CLEAR_REGISTRATION_ERRORS:
      return { ...state, error: initialState.error };
    case REGISTRATION_SUCCESSFUL:
    default:
      return state;
  }
};
