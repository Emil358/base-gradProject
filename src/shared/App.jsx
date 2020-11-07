import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppContainer } from './containers/AppContainer';
import './main.global.css';

export function Application () {

  return (
    <AppContainer />
  );

}

export const App = hot(Application);
