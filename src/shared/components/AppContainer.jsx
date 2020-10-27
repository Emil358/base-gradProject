import React, {useState, useEffect} from 'react';
import { Heading } from './Header';
import { UnsplashImage } from './UnsplashImage';
import styles from './AppContainer.css';
import { authToken } from '../context/tokenContext';
import {isAuthContext} from '../context/isAuthContext'
import { useToken } from '../hooks/useToken';


export function AppContainer () {
  const [token] = useToken()
  const isAuthenticated = !!token;


  return (
    <authToken.Provider value={token}>
      <isAuthContext.Provider value={isAuthenticated}>
        <div className = {styles.body}>
          <Heading />
          <UnsplashImage />
        </div>
      </isAuthContext.Provider>
    </authToken.Provider>
  );

}
