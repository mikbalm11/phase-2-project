import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './components/App';
import About from './components/About';
import MovieForm from './components/MovieForm';
import MovieCardPage from './components/MovieCardPage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
