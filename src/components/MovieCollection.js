import React from "react";
import MovieCard from "./MovieCard";
import { Card } from "semantic-ui-react";
import { useOutletContext } from 'react-router-dom';

function MovieCollection() {
    const { movies, searchTerm, } = useOutletContext();
    const allMovies = movies.map(movie => (<MovieCard key={movie.id} movie={movie} searchTerm={searchTerm} />));
    return (
        <Card.Group itemsPerRow={4}>
            {allMovies}
        </Card.Group>
    );
}

export default MovieCollection;
