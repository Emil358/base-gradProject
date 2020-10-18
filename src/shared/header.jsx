import * as React from 'react';
import { hot } from 'react-hot-loader/root'

function HeaderComponent () {
  return (
    <header>
      <h1>Hello world</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);
