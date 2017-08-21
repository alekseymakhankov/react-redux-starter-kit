import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import routes from 'routes';
import createRoutes from 'helpers/createRoutes';
import store from 'helpers/configureStore';

import Header from 'components/Header';

import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          {createRoutes(routes)}
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
