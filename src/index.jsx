
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./styles/index.css";

import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import Header from "./components/organisms/Header/Header.jsx"
import Footer from "./components/organisms/Footer/Footer.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: 'home'
  },
  {
    path: "/about",
    element: <About />,
    name: 'about',
  },
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header links={routes}/> 
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
