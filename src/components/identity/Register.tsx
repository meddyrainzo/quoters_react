import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/registerActions';

import { RegisterRequest } from '../../models/regiterRequest';

import './Identity.scss';

let initialRequest: RegisterRequest = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const Register: FC = () => {
  const [request, setRequest] = useState(initialRequest);
  const dispatch = useDispatch();

  const { firstname, lastname, email, password } = request;

  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  return (
    <div className='form-page'>
      <div className='identity-title'>Create account</div>
      <div className='form'>
        <input
          type='text'
          value={firstname}
          name='firstname'
          onChange={onValueChanged}
          className='text-field'
          placeholder='Please enter your first name'
        />
        <input
          type='text'
          value={lastname}
          name='lastname'
          onChange={onValueChanged}
          className='text-field'
          placeholder='Please enter your last name'
        />
        <input
          type='email'
          value={email}
          name='email'
          onChange={onValueChanged}
          className='text-field'
          placeholder='Please enter your email'
        />
        <input
          type='password'
          value={password}
          name='password'
          onChange={onValueChanged}
          className='text-field'
          placeholder='Please create your password'
        />
        <button
          className='submit-button'
          onClick={() => dispatch(registerAction(request))}
        >
          Register user
        </button>

        <div>
          Already have an account?
          <button className='second-option'>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
