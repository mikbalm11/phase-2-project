import React from "react";
import MovieCollection from "./MovieCollection";
import { Container } from "semantic-ui-react";

function MoviePage({ movies, searchTerm }) {
  return (
    <Container>
      <MovieCollection movies={movies} searchTerm={searchTerm} />
    </Container>
  );
}

export default MoviePage;
