import React from 'react';
import styles from './Image.css';
import { Link, useLocation } from "react-router-dom";
import { IconHeart } from './IconHeart';

export const Image = ({ image, isAuth }) => {
  let location = useLocation();
  let date = new Date(image.created_at);
  let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  if(isAuth) {
    return(
      <Link
        to={{
          pathname: `/auth/img/${image.id}`,
          state: { background: location }
        }}
      >
        <div className={styles.imageItem}>
          <img className={styles.image} src={image.urls.small}  alt="" />
          <div className={styles.header}>
            <span className={styles.avatarBox} target="_blank">
              <img src={image.user.profile_image.medium} className={styles.avatarImage} alt={image.alt_description} />
            </span>
            <div className={styles.headerUser}>
              <span className={styles.headerUsername} target="_blank">{image.user.username}</span>
              <span className={styles.headerCreatedAt}>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</span>
            </div>
          </div>
          <div className={styles.likes}>
            <IconHeart like={image.liked_by_user} />
            <span className={styles.countLikes}>{image.likes}</span>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <div className={styles.imageItem}>
      <img className={styles.image} src={image.urls.small}  alt="" />
      <div className={styles.header}>
        <a href={image.user.links.html} className={styles.avatarBox} target="_blank">
          <img src={image.user.profile_image.medium} className={styles.avatarImage} alt={image.alt_description} />
        </a>
        <div className={styles.headerUser}>
          <a href={image.user.links.html} className={styles.headerUsername} target="_blank">{image.user.username}</a>
          <span className={styles.headerCreatedAt}>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</span>
        </div>
      </div>
      <div className={styles.likes}>
        <IconHeart />
        <span className={styles.countLikes}>{image.likes}</span>
      </div>
    </div>
  )
};
