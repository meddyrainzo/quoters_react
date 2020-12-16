import React, { FC } from 'react';
import { faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nameAbbreviator } from '../../utils/nameAbbreviator';
import { SingleQuote } from './models/singleQuote';
import './Quote.scss';

const Quote: FC<SingleQuote> = (singleQuote: SingleQuote) => {
  const { firstname, lastname } = singleQuote.postedBy;
  const {
    postedOn,
    quote,
    author,
    numberOfComments,
    numberOfLikes,
  } = singleQuote;

  return (
    <div className='quote-container'>
      <div className='quote-container-header'>
        <div className='user-profile-wrapper'>
          <div className='profile-picture'>
            {nameAbbreviator(firstname, lastname)}
          </div>
          <div className='user-name'>{`${firstname} ${lastname}`}</div>
        </div>
        <div className='posted-on'>{postedOn}</div>
      </div>

      <div className='quote-body-container'>
        {quote}
        <div className='author'> - {author}</div>
      </div>
      <div className='quote-container-footer'>
        <div className='footer-item'>
          <FontAwesomeIcon icon={faHeart} /> {numberOfLikes}
        </div>
        <div className='footer-item'>
          <FontAwesomeIcon icon={faCommentAlt} /> {numberOfComments}
        </div>
      </div>
    </div>
  );
};

export default Quote;
