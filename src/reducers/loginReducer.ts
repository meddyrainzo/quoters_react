import {
  LoginAction,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
} from '../actions/loginActions';
import { ErrorResult } from '../models/errorResult';
import { User } from '../models/user';

export type UserState = {
  currentUser: User;
  error?: ErrorResult;
};

const initialState: UserState = {
  currentUser: { firstname: '', lastname: '', email: '' },
};

export const loginReducer = (
  state: UserState = initialState,
  action: LoginAction
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return { ...state, ...action.payload };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
