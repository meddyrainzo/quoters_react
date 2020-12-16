import React, { FC } from 'react';
import './App.scss';
import Header from './header/Header';
import QuoteList from './quote/QuoteList';

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <QuoteList />
      </div>
    </div>
  );
};

export default App;
