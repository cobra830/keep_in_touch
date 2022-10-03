import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

import styles from './Main.module.css';

const Main = ({ state, store }) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={ <Navigate to="profile" /> } />
        <Route path='profile' element={ <Profile state={state} store={store} /> } />
        <Route path='messages/*' element={ <Messages state={state} store={store} /> } />
        <Route path='news' element={ <News state={state} /> } />
        <Route path='music' element={ <Music /> } />
        <Route path='settings' element={ <Settings /> } />
      </Routes>
    </main>
  );
};

export default Main;
