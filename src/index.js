import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/",
//     element: <Resume/>,
//   },
//   {
//     path: "/",
//     element: <About/>,
//   },
//   {
//     path: "/",
//     element: <Projects/>,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
