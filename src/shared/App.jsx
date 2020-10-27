import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppContainer } from './components/AppContainer'



export function Application () {

  return (
    <AppContainer />
  );

}

export const App = hot(Application);
