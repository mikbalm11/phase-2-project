import App from './pages/App';
import About from './pages/About';
import MovieForm from './components/MovieForm';
import MovieCardPage from './pages/MovieCardPage';
import ErrorPage from './pages/ErrorPage';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/add",
        element: <MovieForm />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/movies/:id",
        element: <MovieCardPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "error",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    }
];

export default routes;
