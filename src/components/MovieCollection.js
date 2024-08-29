import React from "react";
import MovieCard from "./MovieCard";
import { Card } from "semantic-ui-react";
import { useOutletContext } from 'react-router-dom';

function MovieCollection() {
    const { movies, searchTerm, } = useOutletContext();

    const displayedMovies = movies.filter(movie => {
        return movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.Plot.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.Actors.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.Director.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const allMovies = displayedMovies.map(movie => (<MovieCard key={movie.id} movie={movie} />));

    return (
        <Card.Group itemsPerRow={4}>
            {allMovies}
        </Card.Group>
    );
}

export default MovieCollection;
