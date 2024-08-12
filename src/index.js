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
import Results from './pages/results'
import Random from './pages/random'
import Survey from './pages/survey';
import SplashPage from './pages/splashpage';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education'
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
          path: "/results/:id",
          element: <Results/>,
        },
        {
          path: "/random",
          element: <Random/>,
        },
        {
          path: "/survey",
          element: <Survey/>,
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
