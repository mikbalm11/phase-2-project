import React from "react";
import MovieCollection from "../components/MovieCollection";
import { Container, Divider } from 'semantic-ui-react';
import { Outlet, useOutletContext } from 'react-router-dom';

function MoviePage() {
  const { movies, searchTerm, setSearchTerm } = useOutletContext();

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
          <i className="search icon" />
        </div>
      </div>
      <Divider horizontal> All Movies </Divider>
      <MovieCollection />
      <Outlet context={{ movies, searchTerm }} />
    </Container>
  );
}

export default MoviePage;
