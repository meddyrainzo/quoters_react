import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { loginUserAction } from '../../actions/loginActions';
import { LoginRequest } from '../../models/requests/loginRequest';

import './Identity.scss';
import { FormErrorMessages } from '../form/formErrorMessages';
import TextField from '../form/TextField';
import { Link } from 'react-router-dom';

let request: LoginRequest = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const dispatch = useDispatch();
  const { email, password } = request;

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
              label='Email *'
              placeholder='Ex. myemail@mail.com'
              type='email'
              value={email}
              name='email'
            />
            <TextField
              name='password'
              type='password'
              value={password}
              placeholder='Please enter your password'
              label='Password *'
            />
            <button className='submit-button' disabled={!(isValid && dirty)}>
              Sign in
            </button>
            <div>
              Dont have an account?
              <Link className='second-option' to='/register'>
                Register
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
