import { ErrorResult } from '../models/errorResult';
import { registerReducer } from './registerReducer';

describe('Testing the registration reducer', () => {
  test('REGISTRATION_SUCCESSFUL should return the initial state', () => {
    const currentState = {
      error: { statusCode: 400, errorReason: 'Some reason' },
    };
    expect(
      registerReducer(currentState, { type: 'REGISTRATION_SUCCESSFUL' })
    ).toEqual({});
  });

  test('CLEAR_REGISTRATION_ERRORS should return the inital state', () => {
    const currentState = {
      error: { statusCode: 400, errorReason: 'Some reason' },
    };
    expect(
      registerReducer(currentState, { type: 'CLEAR_REGISTRATION_ERRORS' })
    ).toEqual({});
  });

  test('REGISTRATION_FAILURE should add errors to the state', () => {
    const error: ErrorResult = {
      statusCode: 400,
      errorReason: 'Hoobstank strikes back',
    };
    expect(
      registerReducer(undefined, { type: 'REGISTRATION_FAILURE', error })
    ).toEqual({ error });
  });
});
