import React, { ChangeEvent, FocusEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../actions/loginActions';
import { LoginRequest } from '../../models/requests/loginRequest';
import { emailValidator, wordValidator } from '../../utils/verifiers/verifier';

import './Identity.scss';

let initialRequest: LoginRequest = {
  email: '',
  password: '',
};

let initialErrors = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const [request, setRequest] = useState(initialRequest);
  const [errors, setErrors] = useState(initialErrors);
  const dispatch = useDispatch();

  const { email, password } = request;

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  const validateEmail = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: emailValidator(value) });
  };

  const validatePassword = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: wordValidator(name, value) });
  };

  return (
    <div className='form-page'>
      <div className='identity-title'>Sign in</div>
      <div className='form'>
        <label htmlFor='email' className='input-label'>
          Email *
        </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onValueChange}
          className='text-field'
          onBlur={validateEmail}
          placeholder='Please enter your email'
        />
        {errors.email && <span className='error-label'>{errors.email}</span>}
        <label htmlFor='email' className='input-label'>
          Password *
        </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onValueChange}
          onBlur={validatePassword}
          className='text-field'
          placeholder='Please enter your password'
        />
        {errors.password && (
          <span className='error-label'>{errors.password}</span>
        )}
        <button className='forgotten'>Forgotten password?</button>
        <button
          className='submit-button'
          onClick={() => dispatch(loginUserAction(request))}
        >
          Sign in
        </button>
        <div>
          Already have an account?
          <button className='second-option'>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
