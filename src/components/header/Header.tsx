import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUserAction } from '../../actions/authenticationAction';
import { getCurrentUser } from '../../api/IdentityApi';
import { Rootstate } from '../../reducers/reducer';
import { nameAbbreviator } from '../../utils/nameInitialsCreator';
import Modal from '../modal/Modal';
import ProfileImage from '../profile/ProfileImage';

import './Header.scss';

const Header: FC = () => {
  const currentUserFromStore = useSelector(
    (state: Rootstate) => state.currentUser
  );
  const dispatch = useDispatch();
  const currentUserFromLocalStorage = getCurrentUser();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const createHeaderMenu = () => {
    const currentUser = currentUserFromStore.currentUser.email
      ? currentUserFromStore.currentUser
      : currentUserFromLocalStorage;
    if (currentUser.email) {
      const initials = nameAbbreviator(
        currentUser.firstname,
        currentUser.lastname
      );
      return (
        <>
          <button className='add-quote-button' onClick={handleShowModal}>
            Add quote
          </button>
          <ProfileImage initials={initials} />
          <button
            className='header-link'
            onClick={() => dispatch(logoutUserAction())}
          >
            Logout
          </button>
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
      <Modal show={show} OnClose={handleClose} OnSubmit={handleClose} />
      <div className='header-menu'>{createHeaderMenu()}</div>
    </div>
  );
};

export default Header;
