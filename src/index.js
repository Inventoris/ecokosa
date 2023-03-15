import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.js'
import Home from './screens/home/Home.js'
import Article from './screens/article/Article.js'
import RouteErrorPage from './screens/routeError/RouteErrorPage.js'
import Post from './components/post/Post.js'
import { getRandomItem, addFetchModule } from './helpers/helpers.js'
import reportWebVitals from './reportWebVitals'
import './index.css'

const ArticleGenerator = addFetchModule(Article)
const PostGenerator = addFetchModule(Post)

const routes = ['/', 'about', 'sights', 'restrictions', 'prices']
const randomRoute = getRandomItem(routes.slice(1))
const router = createBrowserRouter(
  routes.map((route, index) => {
    return {
      path: route,
      element: <App screen={
        index === 0 ? <Home post={<PostGenerator source={randomRoute} />} /> : <ArticleGenerator source={route} />
      } />,
      errorElement: <RouteErrorPage />
    }
  })
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
