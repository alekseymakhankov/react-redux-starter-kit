import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.css';

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/" className={style.link}>Welcome to app</Link>
    </div>
  );
};

export default Header;
