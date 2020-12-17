import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import { history } from '../history';
import store from '../store';
import './App.scss';
import Header from './header/Header';
import Login from './identity/Login';
import Register from './identity/Register';
import QuoteList from './quote/QuoteList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <>
        <Router history={history}>
          <Header />
          <div className='content'>
            <Route path='/' exact component={QuoteList} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </>
    </Provider>
  );
};

export default App;
