import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import CarDetails from '../pages/Home/Home/CarDetails/CarDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/car-details/:id',
          element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>
        }
      ]
    },
  ]);

export default router;