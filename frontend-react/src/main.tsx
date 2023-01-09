import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.css'
import { RandomDog } from './routes/RandomDog'
import { RandomUser } from './routes/RandomUser'
import { Login } from './routes/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
