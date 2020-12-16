import React, { FC } from 'react';

import './ProfileImage.scss';

type ProfileImageProps = {
  initials: string;
};

const ProfileImage: FC<ProfileImageProps> = (props: ProfileImageProps) => {
  return <div className='profile-picture'>{props.initials}</div>;
};

export default ProfileImage;
