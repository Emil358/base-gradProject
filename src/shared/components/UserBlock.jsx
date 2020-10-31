import React from 'react';
import styles from './UserBlock.css'
import {IconAnon} from '../icons/IconAnon'

export const UserBlock = ({avatarSrc, username}) => {
  return (
    <a
      href = 'https://unsplash.com/oauth/authorize?client_id=HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public+write_likes'
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
