import { ErrorResult } from '../models/errorResult';
import { User } from '../models/user';
import { authenticationReducer, UserState } from './authenticationReducer';

const user: User = {
  id: 'id',
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'fake@email.com',
  token: 'token',
};

describe('Testing the authentication reducer', () => {
  test('it should handle `LOGIN_SUCCESSFUL action type successfully', () => {
    expect(
      authenticationReducer(undefined, {
        type: 'LOGIN_SUCCESSFUL',
        payload: user,
      })
    ).toEqual({ currentUser: user });
  });

  test('LOGIN_SUCCESSFUL should change the state of the currentUser to the new state', () => {
    const initialState: UserState = {
      currentUser: {
        id: '1234',
        firstname: 'lastname',
        lastname: 'firstname',
        email: 'email@fake.com',
        token: 'kento',
      },
    };
    expect(
      authenticationReducer(initialState, {
        type: 'LOGIN_SUCCESSFUL',
        payload: user,
      })
    ).toEqual({ currentUser: user });
  });

  test('LOGIN_FAILURE should include the errors to the state', () => {
    const error: ErrorResult = { statusCode: 400, errorReason: 'It failed!' };
    expect(
      authenticationReducer(undefined, {
        type: 'LOGIN_FAILURE',
        payload: error,
      })
    ).toEqual({
      currentUser: {
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        token: '',
      },
      error,
    });
  });

  test('CLEAR_LOGIN_ERROR should remove the errors from the state', () => {
    const initialState: UserState = {
      currentUser: user,
      error: { statusCode: 400, errorReason: 'Failure' },
    };
    const { error, ...withoutError } = initialState;
    expect(
      authenticationReducer(initialState, { type: 'CLEAR_LOGIN_ERRORS' })
    ).toEqual(withoutError);
  });

  test('LOGOUT_SUCCESSFUL should clear out the currentUser', () => {
    const clearedState: UserState = {
      currentUser: {
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        token: '',
      },
    };

    expect(
      authenticationReducer(
        {
          currentUser: user,
          error: { statusCode: 400, errorReason: 'Reason' },
        },
        { type: 'LOGOUT_SUCCESSFUL' }
      )
    ).toEqual(clearedState);
  });
});
