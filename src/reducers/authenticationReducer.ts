import {
  AuthenticationAction,
  CLEAR_LOGIN_ERRORS,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
  LOGOUT_SUCCESSFUL,
} from '../actions/authenticationAction';
import { ErrorResult } from '../models/errorResult';
import { User } from '../models/user';

export type UserState = {
  currentUser: User;
  error?: ErrorResult;
};

const initialState: UserState = {
  currentUser: { id: '', firstname: '', lastname: '', email: '', token: '' },
};

export const authenticationReducer = (
  state: UserState = initialState,
  action: AuthenticationAction
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return { ...state, currentUser: action.payload };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case CLEAR_LOGIN_ERRORS:
      return { ...state, error: initialState.error };
    case LOGOUT_SUCCESSFUL:
      return { ...initialState };
    default:
      return state;
  }
};
