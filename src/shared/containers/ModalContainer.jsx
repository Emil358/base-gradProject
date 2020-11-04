import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import { authToken } from '../context/tokenContext';
import { likeImage } from '../actions/actions';
import { getDate } from '../gets/getDate';

import { Modal } from '../components/Modal';

export const ModalContainer = (props) => {

  let history = useHistory();
  let { id } = useParams();
  const {images, likeImage} = props;
  const token = useContext(authToken);

  let image
  for(let i = 0; i < images.length; i++) {
    if (id === images[i].id) {
      image = images[i];
    }
  }

  const date = getDate(image.created_at);

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

  useEffect(()=>{}, [image])

  return (
    <Modal image={image} back={back} likePost={likePost} date={date} />
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

ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

export default ModalContainer;
