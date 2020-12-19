import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  clearLoginErrors,
  loginUserAction,
} from '../../actions/authenticationAction';
import { LoginRequest } from '../../models/requests/loginRequest';

import './Identity.scss';
import { FormErrorMessages } from '../form/formErrorMessages';
import TextField from '../form/TextField';
import { Link } from 'react-router-dom';
import { Rootstate } from '../../reducers/reducer';
import Alert from '../alert/Alert';

let request: LoginRequest = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const error = useSelector((state: Rootstate) => state.currentUser.error);
  const dispatch = useDispatch();
  const { email, password } = request;

  return (
    <div className='form-page'>
      {error?.errorReason && (
        <Alert
          message={error.errorReason}
          close={() => dispatch(clearLoginErrors())}
        />
      )}

      <div className='identity-title'>Sign in</div>
      <Formik
        initialValues={request}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(FormErrorMessages.EMAIL)
            .required(FormErrorMessages.REQUIRED),
          password: Yup.string().required(FormErrorMessages.REQUIRED),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(loginUserAction(values));
          setSubmitting(true);
          resetForm();
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
