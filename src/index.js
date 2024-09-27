import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorpage'


import AboutMe from './pages/AboutMe';
import Education from './pages/Education'
import Projects from './pages/Projcets';
import Pigeon from './pages/Pigeon';
import Amomals from './pages/Almomals'
import Merchents from './pages/Merchents'
const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <AboutMe/>
        },

        {
          path: "/aboutme",
          element: <AboutMe/>,
        },
        {
          path: "/education",
          element: <Education/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/pigeon",
          element: <Pigeon/>,
        },
        {
          path: "/amomals",
          element: <Amomals/>,
        },
        {
          path: "/merch",
          element: <Merchents/>,
        },
          ]
  }])
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
