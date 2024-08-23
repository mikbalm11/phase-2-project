import React from "react";
import MovieCollection from "./MovieCollection";
import { Container } from "semantic-ui-react";

function MoviePage({ movies }) {
  return (
    <Container>
      <h1>Movie Database</h1>
      <MovieCollection movies={movies} />
    </Container>
  );
}

export default MoviePage;
