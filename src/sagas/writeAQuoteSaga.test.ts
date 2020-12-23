import { expectSaga } from 'redux-saga-test-plan';
import { cleanup } from '@testing-library/react';
import { call } from 'redux-saga/effects';
import {
  writeAQuoteAction,
  WRITE_A_QUOTE_FAILURE,
  WRITE_A_QUOTE_SUCCESS,
} from '../actions/quoteActions';
import { writeAQuote } from '../api/QuotesApi';

import WriteAQuoteRequest from '../models/requests/writeAQuoteRequest';
import { SingleQuote } from '../models/singleQuote';
import { writeAQuoteWorker } from './writeAQuoteSaga';

const request: WriteAQuoteRequest = { quote: 'First quote', author: 'Author' };

afterEach(cleanup);
describe('Testing write a quote saga', () => {
  test('writing a quote successfully', () => {
    const postedBy = { firstname: 'firstname', lastname: 'lastname' };
    const quote: SingleQuote = {
      id: 'id-1',
      quote: 'First quote',
      author: 'Author',
      postedBy,
      postedOn: 'Dec 1 2020',
      comments: 20,
      likesCount: 55,
      likedByYou: true,
    };

    return expectSaga(writeAQuoteWorker, request)
      .provide([[call(writeAQuote, request), quote]])
      .put({ type: WRITE_A_QUOTE_SUCCESS, payload: quote })
      .dispatch(writeAQuoteAction(request))
      .run();
  });

  test('wirte a quote failed', () => {
    const error = { status: 400, errorReason: 'Reason' };
    const { status, errorReason } = error;
    return expectSaga(writeAQuoteWorker, request)
      .provide([[call(writeAQuote, request), error]])
      .put({
        type: WRITE_A_QUOTE_FAILURE,
        payload: { statusCode: status, errorReason },
      })
      .dispatch(writeAQuoteAction(request))
      .run();
  });
});
