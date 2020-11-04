import React from 'react';
import styles from './UserBlock.css';
import { IconAnon } from '../icons/IconAnon';
import { getAuthUrl } from '../gets/getAuthenticationUrl';

export const UserBlock = ({avatarSrc, username}) => {
  const authenticationUrl = getAuthUrl();

  return (
    <a
      href = {authenticationUrl}
      className = {styles.userBox}
      >
      <div className = {styles.avatarBox}>
        {avatarSrc
        ? <img src = {avatarSrc} alt = 'user avatar' className = {styles.avatarImage} />
        : <IconAnon />
        }
      </div>

      <div className = {styles.username}>
        <span>{username || 'Аноним'}</span>
      </div>
    </a>
  )
}
