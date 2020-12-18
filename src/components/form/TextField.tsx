import React, { FC } from 'react';
import { useField, FieldHookConfig } from 'formik';
type TextFieldProps = FieldHookConfig<string> & {
  label: string;
};

const TextField: FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className='input-label'>
        {props.label}
      </label>
      <input
        className='text-field'
        {...field}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
      {meta.touched && meta.error && (
        <span className='error-label'>{meta.error}</span>
      )}
    </>
  );
};

export default TextField;
