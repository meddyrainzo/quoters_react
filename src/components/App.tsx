import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <Header />
          <div className='content'>
            <Route path='/' component={Login} />
            <Route path='/quotes' component={QuoteList} />
          </div>
        </Router>
      </>
    </Provider>
  );
};

export default App;
