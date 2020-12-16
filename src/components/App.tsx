import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import './App.scss';
import Header from './header/Header';
import QuoteList from './quote/QuoteList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className='content'>
          <QuoteList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
