import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

function App() {
  const [movieItem, setMovieItem] = useState("tt0043338");
  const [movies, setMovies] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(response => response.json())
    .then(data => setMovies(data))
    .catch(error => console.error('Error:', error));
  }, []);

  console.log(movies[itemNumber]);

  // useEffect(() => {
  //     fetch(API_URL + API_KEY + "&i=" + movies[itemNumber].iMDbID)
  //     .then(response => response.json())
  //     .then(data => setMovieItem(data))
  //     .catch(error => console.error('Error:', error));
  //   }, [itemNumber]);

  // if (!movieItem) return <p>Movie Loading...</p>;

  // console.log(movieItem.Title);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setItemNumber((prevState) => (prevState + 1))}>NEXT</button>
        <MovieList movies={movies} />
      </header>
    </div>
  );
}

export default App;
