import React from "react";
import MovieCard from "./MovieCard";
import { Card } from "semantic-ui-react";

function MovieCollection({ movies, searchTerm }) {
    const allMovies = movies.map(movie => (<MovieCard key={movie.id} movie={movie} searchTerm={searchTerm} />));
    return (
        <Card.Group itemsPerRow={4}>
            {allMovies}
        </Card.Group>
    );
}

export default MovieCollection;
