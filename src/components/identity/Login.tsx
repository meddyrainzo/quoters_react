import React, { FC } from 'react';

import './Identity.scss';

const Login: FC = () => {
  return (
    <div className='form-page'>
      <div className='identity-title'>Sign in</div>
      <div className='form'>
        <input
          type='email'
          className='text-field'
          placeholder='Please enter your email'
        />
        <input
          type='password'
          className='text-field'
          placeholder='Please enter your password'
        />
        <button className='forgotten'>Forgotten password?</button>
        <button className='submit-button'>Sign in</button>
        <div>
          Already have an account?
          <button className='second-option'>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
