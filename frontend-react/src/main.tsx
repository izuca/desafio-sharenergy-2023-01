import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.css'
import { RandomDog } from './routes/RandomDog'
import { RandomUser } from './routes/RandomUser'
import { Login } from './routes/Login'
import { HttpCat } from './routes/HttpCat'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path:'/RandomUser',
    element:<RandomUser/>
  },
  {
    path:'/HTTpCat',
    element:<HttpCat/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
