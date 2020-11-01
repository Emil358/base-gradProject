import React, { useContext } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import { authToken } from '../context/tokenContext';
import { likeImage } from '../actions/actions';

import { IconClose } from '../icons/IconClose';
import { IconHeart } from '../icons/IconHeartForModal';

import styles from './Modal.css';

export const Modal = (props) => {
  let history = useHistory();
  let { id } = useParams();

  const {images, likeImage} = props;

  const token = useContext(authToken)

  const image

  for(let i = 0; i < images.length; i++) {
    if (id === images[i].id) {
      image = images[i];
    }
  }

  const date = new Date(image.created_at);
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const back = event => {
    event.stopPropagation();
    history.goBack();
  };

  const likePost = (id) => {
    if (!image.liked_by_user) {
      axios
      .get(`/api/likePhoto?id=${id}&token=${token}`)
      .then(res => {
        likeImage(id)
      })
      .catch(err => console.log('{12}', err));
    } else {
      axios
      .get(`/api/unlikePhoto?id=${id}&token=${token}`)
      .then(res => {
        likeImage(id)
      })
      .catch(err => console.log('{12}', err));
    }
  }


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
              <span className={styles.headerCreatedAt}>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</span>
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
  );
}

const mapStateToProps = (state) => {
  return{
    images: state
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    likeImage: (images) => dispatch(likeImage(images)),
  };
}

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default Modal;
