import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { likeImage } from '../actions/actions'

export const Modal = (props) => {
  let history = useHistory();
  let { id } = useParams();

  const {images, likeImage} = props;

  const image

  for(let i = 0; i < images.length; i++) {
    if (id === images[i].id) {
      image = images[i];
    }
  }

  let back = event => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.id}</h1>

        <button type="button" onClick={back}>
          Close
        </button>
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
