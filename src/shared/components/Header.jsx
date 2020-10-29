import React, {useContext} from 'react';
import styles from './Header.css';
import { UserBlock } from './UserBlock';
import { useData } from '../hooks/useData';
import { isAuthContext } from '../context/isAuthContext';


export const Heading = () => {
  const [data] = useData()
  const auth = useContext(isAuthContext)
  return (
    <header className = {styles.header}>
      {console.log(auth)}
      <h1 className = {styles.hOne}>Unsplash</h1>
      <p>The internet’s source of freely usable images.</p>
      <p>Powered by creators everywhere.</p>
      <UserBlock avatarSrc={data.iconImg} username={data.username}/>
      {auth && <p>hiiiiiiiiiiiiiiiiii</p>}
    </header>
  )
}
