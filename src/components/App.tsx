import React, { FC } from 'react';
import './App.scss';
import QuoteList from './quote/QuoteList';

const App: FC = () => {
  return (
    <div>
      <QuoteList />
    </div>
  );
};

export default App;
