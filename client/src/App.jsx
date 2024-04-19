import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from './pages/List';
import Layout from './layout/Layout';
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/list",
        element: <List/>
      },
      {
        path:"/:id",
        element: <Single/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
    // <div>
    //   <Navbar/>
    //   <Home/>
    // </div>
  )
}

export default App
