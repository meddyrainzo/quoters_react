import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <button className='header-link'>Logout</button>
        </>
      );
    }
    return (
      <>
        <Link className='header-link' to='/register'>
          Register
        </Link>
        <Link className='header-link' to='/login'>
          Sign in
        </Link>
      </>
    );
  };

  return (
    <div className='header-container'>
      <Link className='title' to='/'>
        Quoters
      </Link>
      <div className='header-menu'>{createHeaderMenu()}</div>
    </div>
  );
};

export default Header;
