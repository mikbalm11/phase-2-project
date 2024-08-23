import React, { useState, useEffect } from 'react';
import MoviePage from './MoviePage';
import Header from './Header';
import Search from './Search';
import { Divider } from'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
function App() {
  const [movies, setMovies] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search search={searchTerm} onChangeSearch={setSearchTerm} />
      {/* <button onClick={() => setItemNumber((prevState) => (prevState + 1))}>NEXT</button> */}
      <Divider horizontal> Movies </Divider>
      <MoviePage movies={movies} />
    </div>
  );
}

export default App;
