import {
  RegisterAction,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESSFUL,
} from '../actions/registerActions';
import { ErrorResult } from '../models/errorResult';

type RegisterState = {
  error?: ErrorResult;
};

export const registerReducer = (
  state: RegisterState = {},
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case REGISTRATION_FAILURE:
      console.log('FAILED TO REGISTER');
      return { ...state, error: action.error };
    case REGISTRATION_SUCCESSFUL:
      console.log('REGISTRATION DONE SUCCESSFULLY');
      return state;
    default:
      return state;
  }
};
