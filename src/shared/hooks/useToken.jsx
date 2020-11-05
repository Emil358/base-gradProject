import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';



export function useToken() {
  const [token, setToken] = useState('');
  if (typeof window !== 'undefined') {
    if (localStorage.length !== 0) {
      const localStorageToken = localStorage.getItem('token')
    } else {
      const localStorageToken = null
    }
  } else {
    const localStorageToken = null
  }
  let Location = useLocation();
  useEffect(() => {

    if (window.__token__ !== 'undefined') {
      setToken(window.__token__)
      localStorage.setItem('token', window.__token__)
    }
    if (window.__token__ === 'undefined' && localStorageToken) {

      if(Location.pathname === '/auth') {
        setToken(localStorageToken);
        window.__token__= localStorageToken;
      } else if (Location.pathname === '/') {
        location.assign(`http://localhost:3000/auth?token=${localStorageToken}`)
      }
    }
  }, []);

  return [token]
}
