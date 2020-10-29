import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Heading } from './Header';
import { UnsplashImage } from './UnsplashImage';
import styles from './AppContainer.css';
import { authToken } from '../context/tokenContext';
import {isAuthContext} from '../context/isAuthContext'
import { useToken } from '../hooks/useToken';
import imagesReducers from '../reducers/redusers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(imagesReducers, composeWithDevTools())


export function AppContainer () {
  const [token] = useToken()
  const isAuthenticated = !!token;


  return (
    <Provider store={store}>
      <authToken.Provider value={token}>
        <isAuthContext.Provider value={isAuthenticated}>
          <div className = {styles.body}>
            <Heading />
            <UnsplashImage />
          </div>
        </isAuthContext.Provider>
      </authToken.Provider>
    </Provider>
  );

}
