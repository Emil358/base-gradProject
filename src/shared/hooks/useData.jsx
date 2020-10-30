import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { authToken } from '../context/tokenContext';

export function useData(token) {
  const [data, setData] = useState({})

  const token = useContext(authToken)

  useEffect(() => {
    if(token && token !== 'undefined') {
    axios
      .get(`/api/userMe?token=${token}`)
      .then(res => {
        // console.log("{11}",res);
        setData({username: res.data.username, iconImg: res.data.profile_image.large})

      });
    }
  }, [token])

  return [data]
}
