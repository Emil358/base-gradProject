import React, { useContext } from 'react';
import styles from './Header.css';
import { UserBlock } from '../components/UserBlock';
import { useData } from '../hooks/useData';
import { isAuthContext } from '../context/isAuthContext';


export const Heading = () => {
  const [data] = useData()
  const isAuth = useContext(isAuthContext);
  const logOut = () => {
    localStorage.removeItem('token')
    location.assign('http://localhost:3000/')
  }

  return (
    <header className = {styles.header}>
      <h1 className = {styles.hOne}>gradProject</h1>
      <p>The internet’s source of freely usable images.</p>
      <p>Powered by creators everywhere.</p>
      <UserBlock avatarSrc={data.iconImg} username={data.username} isAuth = {isAuth} logOut={logOut} />
    </header>
  )
}
