import { getQuotesWorker } from './getQuotesSaga';
import { expectSaga } from 'redux-saga-test-plan';
import {
  getQuotesAction,
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
} from '../actions/quoteActions';
import { getQuotes } from '../api/QuotesApi';
import * as matchers from 'redux-saga-test-plan/matchers';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Testing get quotes saga', () => {
  test('It should get quotes successfully', () => {
    return expectSaga(getQuotesWorker)
      .provide([[matchers.call.fn(getQuotes), {}]])
      .put({ type: GET_QUOTES_SUCCESS, payload: {} })
      .dispatch(getQuotesAction())
      .run();
  });

  test('It should put an error when get quotes fail', () => {
    const error = { status: 400, errorReason: 'Reason' };
    const { status, errorReason } = error;
    return expectSaga(getQuotesWorker)
      .provide([[matchers.call.fn(getQuotes), error]])
      .put({
        type: GET_QUOTES_FAILURE,
        payload: { statusCode: status, errorReason },
      })
      .dispatch(getQuotesAction())
      .run();
  });
});
