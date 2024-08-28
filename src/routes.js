import App from './App';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MovieCardPage from './pages/MovieCardPage';
import MovieForm from './components/MovieForm';
import MoviePage from './pages/MoviePage';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/movies",
                element: <MoviePage />,
            },
            {
                path: "/movies/:id",
                element: <MovieCardPage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/add",
                element: <MovieForm />,
            }
        ]
    },
    {
        path: "error",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    }
];

export default routes;
