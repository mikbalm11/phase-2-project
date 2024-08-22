import React from "react";
import MovieCard from "./MovieCard";
import { Card } from "semantic-ui-react";

function MovieCollection({ movies }) {
    const allMovies = movies.map(movie => (<MovieCard key={movie.id} movie={movie} />));
    return (
        <Card.Group itemsPerRow={5}>
            {allMovies}
        </Card.Group>
    );
}

export default MovieCollection;