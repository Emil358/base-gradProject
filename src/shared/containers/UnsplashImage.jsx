import React, { useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Loader } from '../components/Loader';
import { Image } from '../components/Image';
import { addImages } from '../actions/actions'
import { isAuthContext } from '../context/isAuthContext';

import styles from './UnsplashImage.css';

export const UnsplashImage = (props) => {
  const [ start, setStart ] = useState(1);
  const COUNT = 30;

  const isAuth = useContext(isAuthContext)

  const { images, addImages } = props;

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    axios
      .get(`/api/photos?count=${COUNT}&start=${start}`)
      .then(res =>
        // this.setState({ images: this.state.images.concat(res.data) })
        addImages(res.data)
      );
    setStart(start + COUNT);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className = {styles.images}>
        { images.map((image, item) => (
          <Image image={image} key={item} isAuth={isAuth} />
            // console.log(image)
          ))
        }
        </div>
      </InfiniteScroll>
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
    addImages: (images) => dispatch(addImages(images)),
  };
}

UnsplashImage = connect(mapStateToProps, mapDispatchToProps)(UnsplashImage);

export default UnsplashImage;
