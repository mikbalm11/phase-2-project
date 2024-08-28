# MovieDB ⚡️

MovieDB is a web application built with React that provides a comprehensive movie database inspired by IMDb. It allows users to search for movies, view detailed information, and explore various movie categories.

## Features

- **Movie Search**: Search for movies by title, description, actor, or director.
- **Individual Movie Pages**: View detailed information for each movie.
- **Add Movies**: Add new movies to the database using IMDb IDs.
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
    npm install semantic-ui-react semantic-ui-css
    npm install react-router-dom@6
    ```

3. Start the JSON server for a mock backend, you will need to use port 3001:
    ```bash
    npx json-server --watch db.json --port 3001
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. You will need to generate a new file called apikey.js with the following line, you will need to replace the string with your own key
    ```bash
    export const API_KEY = 'YOUR_KEY_HERE';
    ```

## Usage

- **Home Page**: Features a welcome message and a button to retrieve 4 random movies.
- **Movies Page**: Displays a list of all movies in the database with search functionality. You can also view detailed information for individual movies by clicking on movie cards.
- **Movie Card Pages**: Click on a movie card to view detailed information about the selected movie.
- **Add Movie**: Navigate to the "Add" page to add new movies using their IMDb IDs. This page retrieves and displays movie details from the OMDb API.
- **About Page**: Provides information about the project and its purpose.

## Project Structure

- `src/components`: Contains React components used throughout the application.
- `src/pages`: Contains the pages displayed via the navigation bar.
- `src/index.css`: Contains custom CSS for styling the application.
- `src/index.js`: Entry point for the React application.
- `db.json`: Mock database file used by JSON Server.
