import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './assets/header.jsx'
import './index.css'
import Project from './assets/projects.jsx'
import About from './assets/about.jsx'
import Home from './assets/home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<><Header/><Home/></>
  },
  {
    path:"/home",
    element:<><Header/><Home/></>
  },
  {
    path:"/about",
    element:<><Header/><About/></>
  },
  {
    path:"/projects",
    element:<><Header/><Project/></>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
