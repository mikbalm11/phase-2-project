import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './apikey';

const API_URL = "https://www.omdbapi.com/?&plot=full&apikey="

function App() {
  const [movie, setMovie] = useState();

  const example = "&i=tt0071562"

  useEffect(() => {
    fetch(API_URL + API_KEY + example)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!movie) return <p>Movie Loading...</p>;

  console.log(movie.Title);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
