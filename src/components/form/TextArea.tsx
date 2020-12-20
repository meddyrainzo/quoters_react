import React, { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';

import './Form.scss';

const TextArea: FC<FieldHookConfig<string>> = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        className='text-area'
        {...field}
        placeholder={props.placeholder}
        name={props.name}
      />
      {meta.touched && meta.error && (
        <span className='error-label'>{meta.error}</span>
      )}
    </>
  );
};

export default TextArea;
