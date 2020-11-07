import React from 'react';
import styles from './UserBlock.css';

import { IconAnon } from '../icons/IconAnon';
import { getAuthUrl } from '../gets/getAuthenticationUrl';
import { IconClose } from '../icons/IconClose';

export const UserBlock = ({avatarSrc, username, isAuth, logOut}) => {

  const authenticationUrl = getAuthUrl();
  if (isAuth) {
    return (
      <button
        onClick = {logOut}
        className = {styles.userBoxIsAuth}
        >
        <div className = {styles.avatarBox}>
          <img src = {avatarSrc} alt = 'user avatar' className={styles.avatarImage} />
        </div>

        <div className = {styles.username}>
          <span>{username}</span>
        </div>
      </button>
    )
  }

  return (
    <a
      href = {authenticationUrl}
      className = {styles.userBox}
      >
      <div className = {styles.avatarBox}>
         <IconAnon />
      </div>

      <div className = {styles.username}>
        <span>{'Аноним'}</span>
      </div>
    </a>
  )
}
