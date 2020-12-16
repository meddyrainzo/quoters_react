import React, { FC } from 'react';
import ProfileImage from '../profile/ProfileImage';

import './Header.scss';

const Header: FC = () => {
  const initials = 'FL';

  return (
    <div className='header-container'>
      <div className='title'>
        <span>Quoters</span>
      </div>
      <div className='header-menu'>
        <button className='add-quote-button'>Add quote</button>
        <ProfileImage initials={initials} />
        <a href='#' className='menu-text'>
          logout
        </a>
      </div>
    </div>
  );
};

export default Header;
