import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    // redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login, { authLoader as loginAuthLoader } from './pages/Login'

import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projcets';
import ErrorPage from './pages/ErrorPage';

// async function authLoader() {
//     const res = await fetch("/.auth/me")
//     const resJ = await res.json()
//     const client = resJ.clientPrincipal
//     if (client) {
//         return client
//     }
//     return redirect('/login')
// }

// async function loginRedirectLoader() {
//     // check user first time login
//     const res = await fetch('/api/login', { method: "GET" })
//     console.log("Logging in: ", res)
//     return redirect('/')
// }

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <AboutMe/>,
            //loader: authLoader,
            errorElement: <ErrorPage/>
        }, {
            path: "AboutMe",
            element: <AboutMe/>,
            //loader: authLoader,
            errorElement: <ErrorPage/>
         }, 
         {
            path: "Projects",
            element: <Projects/>,
            //loader: authLoader,
            errorElement: <ErrorPage/>
        }, {
            path: "Education",
            element: <Education/>,
            //loader: authLoader,
            errorElement: <ErrorPage/>
        }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);
