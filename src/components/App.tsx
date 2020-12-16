import React, { FC } from 'react';
import Quote from './quote/Quote';
import './App.scss';

const firstQuote = {
  id: '123345',
  quote:
    "Lorem Ipsum is simply dummy text of the printing and typesetting \
  industry. Lorem Ipsum has been the industry's standard dummy text ever \
  since the 1500s",
  author: 'Authur',
  postedBy: { firstname: 'First', lastname: 'Last' },
  postedOn: '20th Dec 2020',
  numberOfComments: 10,
  numberOfLikes: 15,
  likedByYou: false,
};

const App: FC = () => {
  return (
    <div>
      <Quote
        id={firstQuote.id}
        quote={firstQuote.quote}
        author={firstQuote.author}
        postedBy={firstQuote.postedBy}
        postedOn={firstQuote.postedOn}
        numberOfComments={firstQuote.numberOfComments}
        numberOfLikes={firstQuote.numberOfLikes}
        likedByYou={firstQuote.likedByYou}
      />
    </div>
  );
};

export default App;
