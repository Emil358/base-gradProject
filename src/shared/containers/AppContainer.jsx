import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useLocation, Route } from 'react-router-dom';

import { Heading } from './Header';
import { UnsplashImage } from './UnsplashImage';
import { ModalContainer } from './ModalContainer'

import { authToken } from '../context/tokenContext';
import {isAuthContext } from '../context/isAuthContext';
import { useToken } from '../hooks/useToken';

import imagesReducers from '../reducers/redusers';

import styles from './AppContainer.css';

const store = createStore(imagesReducers, composeWithDevTools());

export function AppContainer () {
  const [token] = useToken()
  const isAuthenticated = !!token;

  let location = useLocation();
  let background = location.state && location.state.background;

  return (
      <Provider store={store}>
        <authToken.Provider value={token}>
          <isAuthContext.Provider value={isAuthenticated}>
            <div className = {styles.body}>
              <Heading />
              <UnsplashImage />
              {isAuthenticated && background && <Route path="/auth/img/:id" children={<ModalContainer />} /> }
            </div>
          </isAuthContext.Provider>
        </authToken.Provider>
      </Provider>
  );
}
