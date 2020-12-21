import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { FC } from 'react';
import WriteAQuoteRequest from '../../models/requests/writeAQuoteRequest';

import './Modal.scss';
import { WriteAQuoteErrors } from '../quote/WriteAQuoteErrors';
import TextArea from '../form/TextArea';
import TextField from '../form/TextField';
import { writeAQuoteAction } from '../../actions/quoteActions';
import { useDispatch } from 'react-redux';

const request: WriteAQuoteRequest = {
  quote: '',
  author: '',
};

type ModelProps = {
  show: boolean;
  OnClose: () => void;
  OnSubmit: () => void;
};

const Modal: FC<ModelProps> = (props) => {
  let modalClassName = props.show ? 'modal' : 'hide-modal';

  const { quote, author } = request;
  const dispatch = useDispatch();

  return (
    <div className={modalClassName}>
      <div className='modal-content'>
        <div className='modal-header'>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='modal-close'
            onClick={props.OnClose}
          />
          <span className='modal-header-title'>Write a quote</span>
        </div>
        <div className='modal-content-body'>
          <Formik
            initialValues={request}
            validationSchema={Yup.object({
              quote: Yup.string()
                .min(1, WriteAQuoteErrors.QUOTE_TOO_SHORT)
                .max(250, WriteAQuoteErrors.QUOTE_TOO_LONG)
                .required(WriteAQuoteErrors.REQUIRED),
              author: Yup.string()
                .min(1, WriteAQuoteErrors.AUTHOR_TOO_SHORT)
                .max(250, WriteAQuoteErrors.AUTHOR_TOO_LONG)
                .required(WriteAQuoteErrors.REQUIRED),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              props.OnSubmit();
              dispatch(writeAQuoteAction(request));
              setSubmitting(true);
              resetForm();
            }}
          >
            {({ isValid, dirty }) => (
              <Form className='modal-form'>
                <TextArea
                  name='quote'
                  value={quote}
                  placeholder='Please write your quote here...'
                />
                <TextField
                  label='Author'
                  value={author}
                  name='author'
                  type='text'
                />
                <button className='submit-modal' disabled={!(isValid && dirty)}>
                  Create quote
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Modal;
