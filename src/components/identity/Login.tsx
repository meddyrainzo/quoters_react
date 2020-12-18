import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { loginUserAction } from '../../actions/loginActions';
import { LoginRequest } from '../../models/requests/loginRequest';

import './Identity.scss';
import { FormErrorMessages } from '../form/formErrorMessages';
import TextField from '../form/TextField';

let request: LoginRequest = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='form-page'>
      <div className='identity-title'>Sign in</div>
      <Formik
        initialValues={request}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(FormErrorMessages.EMAIL)
            .required(FormErrorMessages.REQUIRED),
          password: Yup.string().required(FormErrorMessages.REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(loginUserAction(values));
          setSubmitting(false);
        }}
      >
        {({ isValid, dirty }) => (
          <Form className='form'>
            <TextField
              name='email'
              type='email'
              placeholder='Ex. test@mail.com'
              label='Email *'
            />
            <TextField
              name='password'
              type='password'
              placeholder='Please enter your password'
              label='Password *'
            />
            <button className='submit-button' disabled={!(isValid && dirty)}>
              Sign in
            </button>
            <div>
              Already have an account?
              <button className='second-option'>Sign in</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
