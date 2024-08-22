import React, { useState, useEffect } from 'react';
import MovieCollection from './MovieCollection';
import Header from './Header';
import 'semantic-ui-css/semantic.min.css'
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

  return (
    <div className="App">
      <Header />
      <button onClick={() => setItemNumber((prevState) => (prevState + 1))}>NEXT</button>
      <MovieCollection movies={movies} />
    </div>
  );
}

export default App;
