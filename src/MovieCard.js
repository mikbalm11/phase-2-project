import React, { useState, useEffect } from 'react';
import {
    Button,
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Flag,
    Segment
  } from "semantic-ui-react";
import { API_KEY } from './apikey';

const API_URL = "https://www.omdbapi.com/?&plot=full&apikey="

function MovieCard({ movie }) {
    const [movieItem, setMovieItem] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        fetch(API_URL + API_KEY + "&i=" + movie.iMDbID)
            .then(response => response.json())
            .then(data => setMovieItem(data))
            .catch(error => console.error('Error:', error));
    }, []);


    if (!movieItem) return <p>Loading...</p>;

    return (
        <Card>
            <Image src={movieItem.Poster} wrapped ui={false} />
            <CardHeader>{movieItem.Title}</CardHeader>
            <CardMeta>{movieItem.Year}</CardMeta>
            <Segment>
                {/* {<Flag name={movieItem.Country} />} */}
                {movieItem.Country.split(",").map((country) => <Flag name={country.toLowerCase().trim()} />)}
            </Segment>
            <Button onClick={() => setShowDescription(!showDescription)}>Show Description</Button>
            {showDescription ? <CardDescription>{movieItem.Plot}</CardDescription> : null}
        </Card>
    );
}

export default MovieCard;
