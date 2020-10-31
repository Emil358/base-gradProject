import React, {useContext} from 'react';
import styles from './Header.css';
import { UserBlock } from '../components/UserBlock';
import { useData } from '../hooks/useData';


export const Heading = () => {
  const [data] = useData()

  return (
    <header className = {styles.header}>
      <h1 className = {styles.hOne}>Unsplash</h1>
      <p>The internet’s source of freely usable images.</p>
      <p>Powered by creators everywhere.</p>
      <UserBlock avatarSrc={data.iconImg} username={data.username}/>
    </header>
  )
}
