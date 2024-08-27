import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from "react-router-dom";

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
    Segment,
    Container
} from "semantic-ui-react";

function MovieCardPage() {
    const [showDescription, setShowDescription] = useState(false);
    const [movieItem, setMovieItem] = useState({});
    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${movieId}`)
            .then(r => r.json())
            .then(data => setMovieItem(data))
            .catch(error => console.error(error));
    }, [movieId]);

    if (!movieItem.Title) {
        return (<div>
            <Header />
            <h1>We're sorry, we could not find this movie!</h1>
        </div>
        );
    }

    const { Actors, Director, Title, Plot, Poster, Released, Country, imdbVotes, imdbRating } = movieItem;

    return (
        <div>
            <Header />
            <Container>
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
            </Container>
        </div>
    );
}

export default MovieCardPage;
