import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { quotesReducer } from './quotesReducer';
import { registerReducer } from './registerReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  register: registerReducer,
  currentUser: authenticationReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;
