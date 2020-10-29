import React from 'react';
import styles from './Image.css';

export const Image = ({ image }) => {
  return (
    <img className = {styles.image} src={image.urls.small}  alt="" />
  )
};
