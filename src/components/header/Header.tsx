import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { UserState } from '../../reducers/loginReducer';
import { nameAbbreviator } from '../../utils/nameInitialsCreator';
import ProfileImage from '../profile/ProfileImage';

import './Header.scss';

const Header: FC = () => {
  const currentUser = useSelector((state: UserState) => state.currentUser);

  const createHeaderMenu = () => {
    console.log(JSON.stringify(currentUser, null, 2));
    if (currentUser.email) {
      const initials = nameAbbreviator(
        currentUser.firstname,
        currentUser.lastname
      );
      return (
        <>
          <button className='add-quote-button'>Add quote</button>
          <ProfileImage initials={initials} />
          <button className='borderless-header-button'>Logout</button>
        </>
      );
    }
    return (
      <>
        <button className='borderless-header-button'>Register</button>
        <button className='borderless-header-button'>Sign in</button>
      </>
    );
  };

  return (
    <div className='header-container'>
      <div className='title'>
        <span>Quoters</span>
      </div>
      <div className='header-menu'>{createHeaderMenu()}</div>
    </div>
  );
};

export default Header;
