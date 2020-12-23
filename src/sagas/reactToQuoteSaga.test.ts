import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import {
  reactToQuoteAction,
  REACT_TO_QUOTE,
  REACT_TO_QUOTE_SUCCESS,
} from '../actions/quoteActions';
import { reactToQuote } from '../api/QuotesApi';
import { reactToQuoteWorker } from './reactToQuoteSaga';

describe('"Testing react to quote saga', () => {
  test('Successfully react to quote', () => {
    const quoteId = '1234';

    return expectSaga(reactToQuoteWorker, { type: REACT_TO_QUOTE, quoteId })
      .provide([[call(reactToQuote, quoteId), undefined]])
      .put({ type: REACT_TO_QUOTE_SUCCESS, quoteId })
      .dispatch(reactToQuoteAction(quoteId))
      .run();
  });
});
