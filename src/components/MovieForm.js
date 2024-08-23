import React, {useState} from 'react';

function MovieForm({ onAddMovie, movieID }) {
    const [iMDbID, setiMDbID] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (iMDbID) {
            const movie = {
                id: movieID,
                iMDbID: iMDbID,
                liked: false,
                top250: false,
            };
            onAddMovie(movie);
            setiMDbID('');
            //console.log('Movie added:', movie);
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label>iMDb ID:</label>
                <input type="text" value={iMDbID} onChange={(e) => setiMDbID(e.target.value)} />
                <button type="submit">Add Movie</button>
                </div>
        </form>
    )
}

export default MovieForm;
