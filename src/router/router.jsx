import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import CarDetails from '../pages/Home/Home/CarDetails/CarDetails';
import PrivateRoute from './PrivateRoute';
import AllToys from '../pages/Home/Home/AllToys/AllToys';
import AddToy from '../pages/Home/Home/AddToy/AddToy';
import MyToys from '../pages/Home/Home/MyToys/MyToys';
import UpdateToy from '../pages/Home/Home/MyToys/UpdateToy';
import Blog from '../pages/Home/Blog/Blog';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: '/all-toy',
          element: <AllToys></AllToys>
        },
        {
          path: 'add-toy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/my-toy',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/update-toy/:id',
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;