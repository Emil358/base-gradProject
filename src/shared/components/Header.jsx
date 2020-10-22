import React from 'react';
import styles from './Header.css';

export const Heading = () => {
  return (
    <header className = {styles.header}>
      <h1 className = {styles.header}>Unsplash</h1>
      <p>The internet’s source of freely usable images.</p>
      <p>Powered by creators everywhere.</p>
    </header>
  )
}
