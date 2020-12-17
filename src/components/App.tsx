import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../store';
import './App.scss';
import Header from './header/Header';
import QuoteList from './quote/QuoteList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Header />
          <div className='content'>
            <Route path='/' component={QuoteList} />
          </div>
        </Router>
      </>
    </Provider>
  );
};

export default App;
