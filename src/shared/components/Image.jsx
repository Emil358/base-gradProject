import React from 'react';
import styles from './Image.css';
import { Link, useLocation } from "react-router-dom";

export const Image = ({ image, isAuth }) => {
  let location = useLocation();

  if(isAuth) {
    return(
      <Link
        to={{
          pathname: `/img/${image.id}`,
          state: { background: location }
        }}
      ><img className = {styles.image} src={image.urls.small}  alt="" /></Link>
    )
  }
  return (
    <img className = {styles.image} src={image.urls.small}  alt="" />
  )
};
