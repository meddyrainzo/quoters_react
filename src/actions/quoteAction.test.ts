import WriteAQuoteRequest from '../models/requests/writeAQuoteRequest';
import { User } from '../models/user';
import {
  getQuotesAction,
  GET_QUOTES,
  reactToQuoteAction,
  REACT_TO_QUOTE,
  writeAQuoteAction,
  WRITE_A_QUOTE,
  WRITE_A_QUOTE_FAILURE,
} from './quoteActions';

describe('Test quote action creators', () => {
  test('get quotes action creator returns the right action with undefined parameters', () => {
    const payload = {};
    const action = { type: GET_QUOTES, payload };
    expect(getQuotesAction()).toEqual(action);
  });

  test('get quotes action creator returns the right action with defined parameters', () => {
    const user: User = {
      firstname: 'First',
      lastname: 'Last',
      email: 'fake@email.com',
      id: '1234',
      token: '1234',
    };
    const payload = { currentUser: user, currentPage: 1, resultsPerPage: 10 };
    const action = { type: GET_QUOTES, payload };
    expect(getQuotesAction(user, 1, 10)).toEqual(action);
  });

  test('get quotes action creator must return an action of type GetQuotesAction', () => {
    const payload = {};
    const wrongAction = { type: GET_QUOTES, loadPay: payload };
    expect(getQuotesAction()).not.toEqual(wrongAction);
  });

  test('react to quote action creator returns the right action', () => {
    const quoteId = '1234';
    const action = { type: REACT_TO_QUOTE, quoteId };
    expect(reactToQuoteAction(quoteId)).toEqual(action);
  });

  test('react to quote action must return an action of type ReactToQuoteAction', () => {
    const quoteId = '1234';
    const action = { type: REACT_TO_QUOTE, idQiote: quoteId };
    expect(reactToQuoteAction(quoteId)).not.toEqual(action);
  });

  test('write a quote action creator should return the right action', () => {
    const request: WriteAQuoteRequest = { quote: 'Hello', author: 'World' };
    const action = { type: WRITE_A_QUOTE, payload: request };
    expect(writeAQuoteAction(request)).toEqual(action);
  });

  test('write a quote action creator must return an action of type WriteAQuoteAction', () => {
    const request: WriteAQuoteRequest = { quote: 'Hello', author: 'World' };
    const action = { type: WRITE_A_QUOTE, request };
    expect(writeAQuoteAction(request)).not.toEqual(action);
  });
});
