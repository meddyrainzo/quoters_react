import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/registerActions';

import { RegisterRequest } from '../../models/requests/regiterRequest';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './Identity.scss';
import { FormErrorMessages } from '../form/formErrorMessages';
import TextField from '../form/TextField';

const request: RegisterRequest = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const Register: FC = () => {
  const dispatch = useDispatch();

  const { firstname, lastname, email, password } = request;

  return (
    <div className='form-page'>
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
              type='text'
              value={email}
              name='email'
            />
            <TextField
              label='Password *'
              type='text'
              value={password}
              placeholder='Please enter a strong password'
              name='password'
            />
            <button className='submit-button' disabled={!(isValid && dirty)}>
              Register user
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
