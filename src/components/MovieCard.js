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
import { API_KEY } from '../apikey';

const API_URL = "https://www.omdbapi.com/?&plot=short&apikey="

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
            <CardContent>
                <CardHeader>{movieItem.Title}</CardHeader>
                <CardMeta><Icon name='calendar alternate' />
                {movieItem.Released}</CardMeta>
                <Segment>
                    {movieItem.Country.split(",").map((country) => <Flag name={country.toLowerCase().trim()} />)}
                </Segment>
                <Button onClick={() => setShowDescription(!showDescription)}>Show Description</Button>
                {showDescription ? <CardDescription textAlign='center'>{movieItem.Plot}</CardDescription> : null}
            </CardContent>
            <CardContent extra>
                <a>
                    <Icon name='user' />
                    {movieItem.imdbVotes}
                </a>
                <br />
                <a>
                    <Icon name='imdb' />
                    {movieItem.imdbRating}
                </a>
            </CardContent>
        </Card>
    );
}

export default MovieCard;
