import React, { useState } from 'react';
import { useParams, useOutletContext } from "react-router-dom";
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
    const params = useParams();
    const allMovies = useOutletContext();
    const movieId = params.id;

    const movieItem = allMovies.movies.find(movie => movie.id === movieId);

    const { Actors, Director, Title, Plot, Poster, Released, Country, imdbVotes, imdbRating } = movieItem;

    return (
        <div>
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
