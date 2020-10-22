import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Heading } from './components/Header';
import { UnsplashImage } from './components/UnsplashImage';
import styles from './App.css';

function AppContainer () {
  return (
    <div className = {styles.body}>
      <Heading />
      <UnsplashImage />
    </div>
  );
}

export const App = hot(AppContainer);
