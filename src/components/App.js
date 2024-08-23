import React, { useState, useEffect } from 'react';
import MoviePage from './MoviePage';
import Header from './Header';
import Search from './Search';
import { Divider, TabPane, Tab } from 'semantic-ui-react';
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

  const sortedMovies = [...movies];

  const panes = [
    {
      menuItem: 'All', render: () =>
        <TabPane>
          <Divider horizontal> All Movies </Divider>
          <MoviePage movies={movies} searchTerm={searchTerm} />
        </TabPane>
    },
    {
      menuItem: 'Best', render: () =>
        <TabPane>
          <Divider horizontal> Top 20 </Divider>
          <MoviePage movies={movies.slice(0, 20)} searchTerm={searchTerm} />
        </TabPane>
    },
    {
      menuItem: 'Random', render: () =>
        <TabPane>
          <Divider horizontal> Random 20 </Divider>
          <MoviePage movies={sortedMovies.sort(() => .5 - Math.random()).slice(0, 20)} searchTerm={searchTerm} />
        </TabPane>
    },
  ]

  return (
    <div className="App">
      <Header />
      <Search search={searchTerm} onChangeSearch={setSearchTerm} />
      {/* <button onClick={() => setItemNumber((prevState) => (prevState + 1))}>NEXT</button> */}
      <Tab panes={panes} />
    </div>
  );
}

export default App;
