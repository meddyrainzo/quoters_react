import React, { FC } from 'react';

import './Identity.scss';

const Register: FC = () => {
  return (
    <>
      <div className='identity-title'>Create account</div>
      <div className='form'>
        <input
          type='text'
          className='text-field'
          placeholder='Please enter your first name'
        />
        <input
          type='text'
          className='text-field'
          placeholder='Please enter your last name'
        />
        <input
          type='email'
          className='text-field'
          placeholder='Please enter your email'
        />
        <input
          type='password'
          className='text-field'
          placeholder='Please create your password'
        />
        <button className='submit-button'>Register user</button>

        <div>
          Already have an account?
          <button className='second-option'>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Register;
