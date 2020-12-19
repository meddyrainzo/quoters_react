import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nameAbbreviator } from '../../utils/nameInitialsCreator';
import { SingleQuote } from '../../models/singleQuote';
import './Quote.scss';
import ProfileImage from '../profile/ProfileImage';
import { reactToQuoteAction } from '../../actions/quoteActions';

const Quote: FC<SingleQuote> = (singleQuote: SingleQuote) => {
  const { firstname, lastname } = singleQuote.postedBy;
  const {
    id,
    postedOn,
    quote,
    author,
    comments: numberOfComments,
    likesCount: numberOfLikes,
    likedByYou,
  } = singleQuote;
  const dispatch = useDispatch();

  const initials = nameAbbreviator(firstname, lastname);

  const reactionColor = () => {
    if (likedByYou) {
      return { color: '#ff69b4' };
    }
    return { color: '#f9f9f9' };
  };

  return (
    <div className='quote-container'>
      <div className='quote-container-header'>
        <div className='user-profile-wrapper'>
          <ProfileImage initials={initials} />
          <div className='user-name'>{`${firstname} ${lastname}`}</div>
        </div>
        <div className='posted-on'>{postedOn}</div>
      </div>

      <div className='quote-body-container'>
        {quote}
        <div className='author'> - {author}</div>
      </div>
      <div className='quote-container-footer'>
        <div
          className='footer-item'
          style={reactionColor()}
          onClick={() => dispatch(reactToQuoteAction(id))}
        >
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
