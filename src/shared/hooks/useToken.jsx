import {useEffect, useState} from 'react';

export function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    if(window.__token__ !== 'undefined') {
      setToken(window.__token__)
    }
  }, []);

  return [token]
}
