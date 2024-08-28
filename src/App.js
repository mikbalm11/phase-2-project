import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet context={{ movies, searchTerm, setSearchTerm, setMovies }} />
    </div>
  );
}

export default App;
