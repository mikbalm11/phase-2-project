import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './apikey';

const API_URL = "https://www.omdbapi.com/?&plot=full&apikey="

function App() {
  const [movieItem, setMovieItem] = useState("tt0043338");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.error('Error:', error));
  }, []);
  
  //console.log(movies);

  useEffect(() => {
    movies.forEach(async (movie) => {
      console.log(movie.iMDbID);
      fetch(API_URL + API_KEY + "&i=" + movie.iMDbID)
      .then(response => response.json())
      .then(async data => setMovieItem(data))
      .catch(error => console.error('Error:', error));
    })}, []);

  if (!movieItem) return <p>Movie Loading...</p>;

  console.log(movieItem.Title);

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
