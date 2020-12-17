import React, { ChangeEvent, FocusEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/registerActions';

import { RegisterRequest } from '../../models/requests/regiterRequest';
import { emailValidator, wordValidator } from '../../utils/verifiers/verifier';

import './Identity.scss';

let initialRequest: RegisterRequest = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

let initialErrors = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const Register: FC = () => {
  const [request, setRequest] = useState(initialRequest);
  const [errors, setErrors] = useState(initialErrors);
  const dispatch = useDispatch();

  const { firstname, lastname, email, password } = request;

  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  const validateEmail = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: emailValidator(value) });
  };

  const validateWord = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: wordValidator(name, value) });
  };

  return (
    <div className='form-page'>
      <div className='identity-title'>Create account</div>
      <div className='form'>
        <label htmlFor='email' className='input-label'>
          First name *
        </label>
        <input
          type='text'
          value={firstname}
          name='firstname'
          onChange={onValueChanged}
          onBlur={validateWord}
          className='text-field'
          placeholder='Please enter your first name'
        />
        {errors.firstname && (
          <span className='error-label'>{errors.firstname}</span>
        )}
        <label htmlFor='email' className='input-label'>
          Last name *
        </label>
        <input
          type='text'
          value={lastname}
          name='lastname'
          onChange={onValueChanged}
          onBlur={validateWord}
          className='text-field'
          placeholder='Please enter your last name'
        />
        {errors.lastname && (
          <span className='error-label'>{errors.lastname}</span>
        )}
        <label htmlFor='email' className='input-label'>
          Email *
        </label>
        <input
          type='email'
          value={email}
          name='email'
          onChange={onValueChanged}
          onBlur={validateEmail}
          className='text-field'
          placeholder='Please enter your email'
        />
        {errors.email && <span className='error-label'>{errors.email}</span>}
        <label htmlFor='email' className='input-label'>
          Password *
        </label>
        <input
          type='password'
          value={password}
          name='password'
          onChange={onValueChanged}
          onBlur={validateWord}
          className='text-field'
          placeholder='Please create your password'
        />
        {errors.password && (
          <span className='error-label'>{errors.password}</span>
        )}
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
