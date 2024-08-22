import React, {useState, useEffect} from'react';
import logo from './logo.svg';
import './App.css';
import { API_KEY } from './apikey';

const API_URL = "https://www.omdbapi.com/?i=tt0071562&plot=full&apikey="

function App() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(API_URL + API_KEY)
     .then(response => response.json())
     .then(data => setMovie(data))
     .catch(error => console.error('Error:', error));
  }, []);

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
