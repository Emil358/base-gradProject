import React, { useContext } from 'react';
import styles from './Header.css';
import { UserBlock } from '../components/UserBlock';
import { useData } from '../hooks/useData';
import { isAuthContext } from '../context/isAuthContext';
import { Logo } from '../components/Logo'

export const Heading = () => {
  const [data] = useData()
  const isAuth = useContext(isAuthContext);
  const logOut = () => {
    localStorage.removeItem('token')
    location.assign('http://faiz-emil.ru/')
  }

  return (
    <header className = {styles.header}>
      <Logo />
      <UserBlock avatarSrc={data.iconImg} username={data.username} isAuth = {isAuth} logOut={logOut} />
    </header>
  )
}
