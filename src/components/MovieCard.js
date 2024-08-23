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

function MovieCard({ movie, searchTerm }) {
    const [movieItem, setMovieItem] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        fetch(API_URL + API_KEY + "&i=" + movie.iMDbID)
            .then(response => response.json())
            .then(data => setMovieItem(data))
            .catch(error => console.error('Error:', error));
    }, [movie.iMDbID]);

    if (!movieItem) return <p>Loading...</p>;

    const { Actors, Director, Title, Plot, Poster, Released, Country, imdbVotes, imdbRating } = movieItem;

    if (!Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Plot.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Actors.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Director.toLowerCase().includes(searchTerm.toLowerCase())) {
        return null; // Don't render this movie if it doesn't match the search term
    }

    return (
        <Card>
            <Image src={Poster} wrapped ui={false} />
            <CardContent>
                <CardHeader>{Title}</CardHeader>
                <CardMeta><Icon name='calendar alternate' />
                    {Released}</CardMeta>
                <Segment>
                    {Country.split(",").map((country) => <Flag name={country.toLowerCase().trim()} />)}
                </Segment>
                <Button onClick={() => setShowDescription(!showDescription)}>Show Description</Button>
                {showDescription ? <CardDescription textAlign='center'>{Plot}</CardDescription> : null}
            </CardContent>
            <CardContent extra>
                <a>
                    <Icon name='user' />
                    {imdbVotes}
                </a>
                <br />
                <a>
                    <Icon name='imdb' />
                    {imdbRating}
                </a>
            </CardContent>
        </Card>
    );
}

export default MovieCard;
