import React, { FC, useState } from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Alert.scss';

/**
 * NOTE: This component has the limitation that it takes every comma as a sentence separator
 * So a sentence like "Hello, world" will be interpreted as 2 sentences. "Hello" and "World"
 */
type AlertProps = {
  message: string;
  backgroundColor?: string;
  foregroundColor?: string;
};

const Alert: FC<AlertProps> = ({ message }) => {
  const [isVisible, setVisible] = useState(message.length > 0);

  const buildAlert = () => {
    const messages = message.split(',');

    const html = messages?.map((err, index) => <span key={index}>{err}</span>);
    return html;
  };

  const closeIcon = () => {
    console.log('Closed the alert dialog');
    setVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='alert'>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='close-icon'
            onClick={closeIcon}
          />
          {buildAlert()}
        </div>
      )}
    </>
  );
};

export default Alert;
