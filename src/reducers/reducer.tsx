import { combineReducers } from 'redux';
import { quotesReducer } from './quotesReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;
