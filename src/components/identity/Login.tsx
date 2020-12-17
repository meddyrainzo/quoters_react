import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../actions/loginActions';
import { LoginRequest } from '../../models/requests/loginRequest';

import './Identity.scss';

let initialRequest: LoginRequest = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const [request, setRequest] = useState(initialRequest);
  const dispatch = useDispatch();

  const { email, password } = request;

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  return (
    <div className='form-page'>
      <div className='identity-title'>Sign in</div>
      <div className='form'>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onValueChange}
          className='text-field'
          placeholder='Please enter your email'
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={onValueChange}
          className='text-field'
          placeholder='Please enter your password'
        />
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
