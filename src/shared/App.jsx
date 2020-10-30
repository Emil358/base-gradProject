import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppContainer } from './components/AppContainer'
// import { BrowserRouter } from 'react-router-dom';

export function Application () {

  return (
    <AppContainer />
  );

}

export const App = hot(Application);
