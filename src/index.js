import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Article from './pages/article/Article.js'
import RouteErrorPage from './pages/routeError/RouteErrorPage.js'
import reportWebVitals from './reportWebVitals'
import './index.css'

const headerNavPaths = ['about', 'sights', 'restrictions', 'prices']
const headerRoutes = headerNavPaths.map(path => {
  return {
    path: path,
    element: <Article title={path} />,
    errorElement: <RouteErrorPage />
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RouteErrorPage />
  },
  ...headerRoutes
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
