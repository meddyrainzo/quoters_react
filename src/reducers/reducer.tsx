import { combineReducers } from 'redux';
import { quotesReducer } from './quotesReducer';
import { registerReducer } from './registerReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  register: registerReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;
