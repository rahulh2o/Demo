import React, { useState } from 'react';

import './App.css';

function App() {
  const [textValue, setTextValue] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [data, setdata] = useState(null);

  const articleResponse = [
    {
      articleId: 1,
      title: 'Harry Potter and the Sorcerer’s Stone Review',
      upvotes: 56,
      date: 12 / 23 / 2016,
    },

    {
      articleId: 2,
      title: 'Harry Potter and the Half Blood Prince Review',
      upvotes: 23,
      date: 12 / 2 / 2016,
    },
    {
      articleId: 3,
      title: 'Harry Potter and the Goblet of Fire Review',
      upvotes: 3,
      date: 11 / 2 / 2017,
    },
  ];

  const changeHandler = (e) => {
    setTextValue(e.target.value);
    if (e.target.value.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
    console.log(textValue);
  };

  const fetchPosts = () => {
    const res = articleResponse.filter((item) => {
      if (item.articleId === +textValue && item.title !== null) {
        return item;
      }
    });
    setdata(res);
  };
  console.log(data);

  const sortAsc = () => {
    data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  };

  const sortDsc = () => {
    data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  return (
    <div className='App'>
      <input type='text' value={textValue} onChange={changeHandler} />
      <button disabled={buttonDisable} onClick={fetchPosts}>
        Fetch
      </button>
      <button onClick={sortAsc}>Newest</button>
      <button onClick={sortDsc}>oldest</button>
      {data &&
        data.map((item) => {
          return (
            <li key={item.articleId}>
              <span>{item.title}</span>
              <span> {item.date}</span>
              <span> {item.upvotes}</span>
            </li>
          );
        })}
    </div>
  );
}

export default App;
