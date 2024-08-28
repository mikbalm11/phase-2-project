import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";
import './index.css';

/**
 *  src/
 *  ├── components/
 *      ├── Header.js
 *      ├── MovieCard.js
 *      ├── MovieCollection.js
 *      ├── MovieForm.js
 *      ├── NavBar.js
 *      ├── Search.js
 *  └── pages/
 *      ├── About.js
 *      ├── ErrorPage.js
 *      ├── Home.js
 *      ├── MovieCardPage.js
 *      ├── MoviePage.js
 *  ├── apikey.js
 *  ├── App.js
 *  ├── index.css
 *  ├── index.js
 *  ├── routes.js
**/

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
