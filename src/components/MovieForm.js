import React, { useState, useEffect } from 'react';
import Header from './Header';
import { API_KEY } from '../apikey';

const API_URL = "https://www.omdbapi.com/?&plot=short&apikey="

function MovieForm() {
    const [iMDbID, setiMDbID] = useState('');
    const [movie, setMovie] = useState('');

    useEffect(() => {
        fetch(API_URL + API_KEY + "&i=" + iMDbID)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error:', error));
    }, [iMDbID]);

    function handleSubmit(event) {
        event.preventDefault();
        if (iMDbID) {
            //onAddMovie(movie);
            setiMDbID('');
            fetch("http://localhost:3001/movies", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)
              })
                .then((response) => response.json())
                .then((data) => setMovie(movie))
                .catch((error) => console.error("Error:", error));
            console.log('Movie added:', movie);
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>iMDb ID:</label>
                    <input type="text" value={iMDbID} onChange={(e) => setiMDbID(e.target.value)} />
                    <button type="submit">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;
