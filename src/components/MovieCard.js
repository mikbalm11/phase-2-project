import React, { useState } from 'react';
import {Link} from "react-router-dom";

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

function MovieCard({ movie, searchTerm }) {
    const [showDescription, setShowDescription] = useState(false);
    const { Actors, Director, Title, Plot, Poster, Released, Country, imdbVotes, imdbRating } = movie;

    if (!Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Plot.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Actors.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !Director.toLowerCase().includes(searchTerm.toLowerCase())) {
        return null; // Don't render this movie if it doesn't match the search term
    }

    return (
        <Card>
            <Image src={Poster} wrapped ui={false} />
            <Link to={`/movies/${movie.id}`}>View movie page</Link>
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
