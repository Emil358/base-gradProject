import React from 'react';
import styles from './Image.css';

export const Image = ({ url, key }) => {
  return (
    <img className = {styles.image} src={url} key={key}   id = {key} alt="" />
  )
};
