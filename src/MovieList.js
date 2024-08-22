import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    const allMovies = movies.map(movie => (<MovieCard key={movie.id} movie={movie} />));
    return (
        <ul>
            {allMovies}
        </ul>
    );
}

export default MovieList;