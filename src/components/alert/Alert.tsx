import React, { FC, ReactNode, useState } from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Alert.scss';

/**
 * NOTE: This component has the limitation that it takes every comma as a sentence separator
 * So a sentence like "Hello, world" will be interpreted as 2 sentences. "Hello" and "World"
 */
type AlertProps = ReactNode & {
  message: string;
  backgroundColor?: string;
  foregroundColor?: string;
  close: () => void;
};

const Alert: FC<AlertProps> = ({ message, close }) => {
  const [isVisible] = useState(message.length > 0);

  const buildAlert = () => {
    const messages = message.split(',');

    const html = (
      <ul>
        {messages?.map((err, index) => (
          <li key={`id-${index}`}>
            <span>{err}</span>
          </li>
        ))}
      </ul>
    );
    return html;
  };

  return (
    <>
      {isVisible && (
        <div className='alert'>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='close-icon'
            onClick={close}
          />
          {buildAlert()}
        </div>
      )}
    </>
  );
};

export default Alert;
