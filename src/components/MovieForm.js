import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { API_KEY } from '../apikey';
import { Container, Form, Button, Message, Icon } from 'semantic-ui-react';

const API_URL = "https://www.omdbapi.com/?&plot=short&apikey=";

function MovieForm() {
    const [iMDbID, setiMDbID] = useState('');
    const [movie, setMovie] = useState();
    const [message, setMessage] = useState('');
    const { movies, setMovies } = useOutletContext();

    useEffect(() => {
        if (iMDbID) {
            fetch(`${API_URL}${API_KEY}&i=${iMDbID}`)
                .then(response => response.json())
                .then(data => setMovie(data))
                .catch(error => console.error('Error:', error));
        }
    }, [iMDbID]);

    function handleSubmit(event) {
        event.preventDefault();
        if (iMDbID && movie) {
            setiMDbID('');
            fetch("http://localhost:3001/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)
            })
                .then(response => response.json())
                .then(data => setMovies([...movies, data]))
                .catch(error => console.error("Error:", error));

            setMessage(`Movie "${movie.Title}" successfully added!`);
        } else {
            setMessage('Please enter a valid IMDb ID.');
        }
    }

    return (
        <Container text style={{ marginTop: '2em' }}>
            <h2 textAlign='center'>
                <Icon name='film' circular />
                Add a New Movie
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>IMDb ID:</label>
                    <input
                        type="text"
                        placeholder="Enter IMDb ID"
                        value={iMDbID}
                        onChange={(e) => setiMDbID(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' primary>Add Movie</Button>
            </Form>
            {message && (
                <Message
                    positive={movie && message.includes('successfully')}
                    negative={!movie || message.includes('Please')}
                    style={{ marginTop: '1em' }}
                >
                    {message}
                </Message>
            )}
        </Container>
    );
}

export default MovieForm;
