import React from 'react';

import { IconClose } from '../icons/IconClose';
import { IconHeart } from '../icons/IconHeartForModal';

import styles from './Modal.css';

export const Modal = (props) => {
  const {image, date, back, likePost} = props;
  return (
    <div className={styles.modal} onClick={back}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.header}>
            <a href={image.user.links.html} className={styles.avatarBox} target="_blank">
              <img src={image.user.profile_image.large} className={styles.avatarImage} alt={image.alt_description} />
            </a>
            <div className={styles.headerUser}>
              <a href={image.user.links.html} className={styles.headerUsername} target="_blank">{image.user.username}</a>
              <span className={styles.headerCreatedAt}>{date}</span>
            </div>
          </div>
          <button className={styles.close} type="button" onClick={back}>
            <IconClose />
          </button>
        </div>
        <div className={styles.boxImage}>
          <img className={styles.image} src={image.urls.regular} alt={image.alt_description}/>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.like}
            onClick={() => likePost(image.id)}
          >
            <IconHeart like={image.liked_by_user} />
            <span className={styles.countLikes}>{image.likes}</span>
          </button>
          <p className={styles.footerText}>Photo by {image.user.name} on <a href="https://unsplash.com/" className={styles.unsplash}>Unsplash</a></p>
        </div>
      </div>
    </div>
  )
}
