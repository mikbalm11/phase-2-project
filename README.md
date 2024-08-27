# MovieDB ⚡️

This is a movie database web application built with React, inspired by IMDb. The application allows users to search for movies, view details, and navigate between different movie categories.

## Features

- **Movie Search**: Search for movies by title, description, actor, or director.
- **Movie Categories**: View movies categorized into "All", "Best", and "Random".
- **Individual Movie Pages**: View detailed information for each movie.
- **Add Movies**: Add new movies to the database using IMDb ID.
- **Error Handling**: Custom error page for handling unexpected errors.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For managing the application's routing.
- **Semantic UI React**: For UI components and styling.
- **OMDb API**: For fetching movie data.
- **JSON Server**: Used as a mock backend to store movie data.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/moviedb.git
    cd moviedb
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Start the JSON server for a mock backend:
    ```bash
    npx json-server --watch db.json --port 3001
    ```

## Usage

- **Home Page**: Displays all movies, with tabs to switch between categories.
- **Search Bar**: Enter a keyword to search for movies.
- **Movie Cards**: Click on a movie card to view more details.
- **Add Movie**: Navigate to the "Add" page to add a new movie using its IMDb ID.

## Project Structure

- `src/components`: Contains all the React components used in the application.
- `src/index.css`: Contains custom CSS for styling the application.
- `src/index.js`: Entry point for the React application.
- `db.json`: Mock database file used by JSON Server.
