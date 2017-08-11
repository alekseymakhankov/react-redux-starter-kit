import React from 'react';
import ExampleForm from 'forms/ExampleForm';

import style from './style.css';

const MainPage = () => {
  return (
    <div className={style.page}>
      MainPage
      <ExampleForm />
    </div>
  );
};

export default MainPage;
