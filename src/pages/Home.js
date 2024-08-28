import { useState } from 'react';
import { Container, Divider, Button, Card } from 'semantic-ui-react';
import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function Home() {
    const { movies, searchTerm } = useOutletContext();
    const [movieCards, setMovieCards] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const selectedMovies = [...movies].sort(() => .5 - Math.random()).slice(0, 4);
        setMovieCards(selectedMovies);
    }

    return (
        <Container textAlign="center">
            <p style={{ fontSize: '1.2em', color: 'grey' }}>
                Welcome to MovieDB!⚡️ Discover the best movies, curated just for you. Hit the button below to see what we recommend today!
            </p>
            <Divider horizontal> Today's Movies </Divider>
            <form onSubmit={handleSubmit}>
                <Button primary type="submit">
                    I'm feeling lucky!
                </Button>
            </form>

            <Divider hidden />

            <Card.Group itemsPerRow={4}>
                {movieCards.map(movie => (
                    <MovieCard key={movie.id} movie={movie} searchTerm={searchTerm} />
                ))}
            </Card.Group>
        </Container>
    )
}

export default Home;
