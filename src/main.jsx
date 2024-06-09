import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Bloges from './components/Bloges/Bloges.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import MainLayout from './components/MainLayout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/bloges',
        element: <Bloges></Bloges>,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks></Bookmarks>
      },
    ]
  },
  
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
)
