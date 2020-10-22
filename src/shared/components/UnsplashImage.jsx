import React, { Component } from 'react';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from './Loader';
import styles from './UnsplashImage.css';
import { Image } from './Image';

export class UnsplashImage extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };
  render () {
  return (

      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className = {styles.images}>
        {this.state.images.map((image, item) => (
            <Image url={image.urls.small} key={item} />
            // {console.log(image.urls.thumb, image.id)}
          ))
        }
        </div>
      </InfiniteScroll>

  );
  }
}

export default UnsplashImage;
