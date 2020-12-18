import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../actions/registerActions';

import { RegisterRequest } from '../../models/requests/regiterRequest';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './Identity.scss';
import { FormErrorMessages } from '../form/formErrorMessages';
import TextField from '../form/TextField';
import { Link } from 'react-router-dom';
import { Rootstate } from '../../reducers/reducer';

const request: RegisterRequest = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const Register: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: Rootstate) => state.register.error);

  const { firstname, lastname, email, password } = request;

  const buildErrorAlert = () => {
    const errorList = error?.errorReason.split(',');
    const html = errorList?.map((err, index) => <span key={index}>{err}</span>);
    return html;
  };

  return (
    <div className='form-page'>
      {error?.errorReason && (
        <div className='identity-error-alert'>{buildErrorAlert()}</div>
      )}
      <div className='identity-title'>Create Account</div>
      <Formik
        initialValues={request}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .required(FormErrorMessages.REQUIRED)
            .min(1, FormErrorMessages.NAME_TOO_SHORT)
            .max(25, FormErrorMessages.NAME_TOO_LONG),
          lastname: Yup.string()
            .min(1, FormErrorMessages.NAME_TOO_SHORT)
            .max(25, FormErrorMessages.NAME_TOO_LONG)
            .required(FormErrorMessages.REQUIRED),
          email: Yup.string()
            .email(FormErrorMessages.EMAIL)
            .required(FormErrorMessages.REQUIRED),
          password: Yup.string()
            .min(6, FormErrorMessages.PASSWORD_TOO_SHORT)
            .max(50, FormErrorMessages.PASSWORD_TOO_LONG)
            .required(FormErrorMessages.REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(registerAction(values));
          setSubmitting(false);
        }}
      >
        {({ isValid, dirty }) => (
          <Form className='form'>
            <TextField
              label='First name *'
              type='text'
              value={firstname}
              placeholder='Ex. Jane'
              name='firstname'
            />
            <TextField
              label='Last name *'
              type='text'
              value={lastname}
              placeholder='Ex. Doe'
              name='lastname'
            />
            <TextField
              label='Email *'
              placeholder='Ex. myemail@mail.com'
              type='email'
              value={email}
              name='email'
            />
            <TextField
              label='Password *'
              type='password'
              value={password}
              placeholder='Please enter a strong password'
              name='password'
            />
            <button className='submit-button' disabled={!(isValid && dirty)}>
              Register user
            </button>
            <div>
              Already have an account?
              <Link className='second-option' to='/login'>
                Sign in
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
