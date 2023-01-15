import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Article from './pages/article/Article.js'
import pathToAbout from './guides/about.md'
import pathToSights from './guides/sights.md'
import pathToRestrictions from './guides/restrictions.md'
import pathToPrices from './guides/prices.md'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Article path={pathToAbout} />} />
        <Route path="sights" element={<Article path={pathToSights} />} />
        <Route path="restrictions" element={<Article path={pathToRestrictions} />} />
        <Route path="prices" element={<Article path={pathToPrices} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
