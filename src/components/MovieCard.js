import React, { useState } from 'react';
import { Link } from "react-router-dom";
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

function MovieCard({ movie }) {
    const [showDescription, setShowDescription] = useState(false);
    const { Title, Plot, Poster, Released, Country, imdbVotes, imdbRating } = movie;

    return (
        <Card>
            <Image src={Poster} wrapped ui={false} />
            <Link to={`/movies/${movie.id}`}>View movie page</Link>
            <CardContent>
                <CardHeader>{Title}</CardHeader>
                <CardMeta>
                    <Icon name='calendar alternate' />
                    {Released}
                </CardMeta>
                <Segment>
                    {Country.split(",").map((country) => {
                        if (country.toLowerCase().trim() === "west germany") {
                            return <Flag key={country} name='germany' />;
                        } if (country.toLowerCase().trim() === "soviet union") {
                            return <Flag key={country} name='russia' />;
                        } if (country.toLowerCase().trim() === "yugoslavia") {
                            return <Flag key={country} name='serbia' />;
                        }
                        return <Flag key={country} name={country.toLowerCase().trim()
                        } />
                    })}
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
