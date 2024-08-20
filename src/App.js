import React, {useState, useEffect} from'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [movie, setMovies] = useState();

  useEffect(() => {
    fetch('https://www.omdbapi.com/?t=batman_begins&apikey=8ac30d6e')
     .then(response => response.json())
     .then(data => setMovies(data));
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
