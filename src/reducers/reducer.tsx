import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { quotesReducer } from './quotesReducer';
import { registerReducer } from './registerReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  register: registerReducer,
  currentUser: loginReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;
