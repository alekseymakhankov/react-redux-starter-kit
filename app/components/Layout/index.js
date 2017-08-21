import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.css';

const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.wrapper}>
        <Link to="/firstpage" className={style.link}>FirstPage</Link>
        <Link to="/countries" className={style.link}>Countries...</Link>
        <div className={style.logo} />
      </div>
    </div>
  );
};

export default Layout;
