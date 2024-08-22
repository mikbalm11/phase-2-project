import React, { useState, useEffect } from 'react';
import { API_KEY } from './apikey';

const API_URL = "https://www.omdbapi.com/?&plot=full&apikey="

function MovieCard({ movie }) {
    const [movieItem, setMovieItem] = useState("");

    useEffect(() => {
        fetch(API_URL + API_KEY + "&i=" + movie.iMDbID)
            .then(response => response.json())
            .then(data => setMovieItem(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>{movieItem.Title}</h1>
            <p>{movieItem.Year}</p>
            <img src={movieItem.Poster} alt={movieItem.Title} />
        </div>
    );
}

export default MovieCard;
