import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';

import routes from 'routes';

import reducers from './reducers';
import style from './style.css';

// const logger = createLogger({});


const store = createStore(
  reducers
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className={style.header}>
            <Link to="/" className={style.link}>Welcome to app</Link>
          </div>
          {
            routes.map((route, index) => {
              return (
                <Route exact path={route.path} component={route.component} key={`route-index-${index}`} />
              );
            })
          }
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
