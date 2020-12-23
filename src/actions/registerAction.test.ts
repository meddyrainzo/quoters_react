import { RegisterRequest } from '../models/requests/regiterRequest';
import {
  registerAction,
  clearRegistrationErrors,
  REGISTER_REQUEST,
  CLEAR_REGISTRATION_ERRORS,
} from './registerActions';

describe('Register action creators', () => {
  test('register user action creator should return the right action', () => {
    const request: RegisterRequest = {
      firstname: 'First',
      lastname: 'Last',
      email: 'fake@email.com',
      password: 'Password',
    };
    const action = { type: REGISTER_REQUEST, payload: request };
    expect(registerAction(request)).toEqual(action);
  });

  test('register user action creator must return an action of type RegisterUserAction', () => {
    const request: RegisterRequest = {
      firstname: 'First',
      lastname: 'Last',
      email: 'fake@email.com',
      password: 'Password',
    };
    const action = { type: REGISTER_REQUEST, request };
    expect(registerAction(request)).not.toEqual(action);
  });

  test('clear registration errors action creator should return the right action', () => {
    const action = { type: CLEAR_REGISTRATION_ERRORS };
    expect(clearRegistrationErrors()).toEqual(action);
  });

  test('clear registration errors action creator must return an action of type ClearRegistrationErrors', () => {
    const action = { meap: CLEAR_REGISTRATION_ERRORS };
    expect(clearRegistrationErrors()).not.toEqual(action);
  });
});
