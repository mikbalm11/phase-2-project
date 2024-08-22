import React from "react";
import MovieCollection from "./MovieCollection";
import { Container } from "semantic-ui-react";

function MoviePage({ movie }) {
  return (
    <Container>
      <h1>Movie Searcher</h1>
      <MovieCollection movie={movie} />
    </Container>
  );
}

export default MoviePage;
