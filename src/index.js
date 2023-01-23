import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Article from './pages/article/Article.js'

import pathToAbout from './guides/about/about.md'
import aboutCover from './guides/about/beach.jpg'

import pathToSights from './guides/sights/sights.md'
import sightsCover from './guides/sights/lookout.jpg'

import pathToRestrictions from './guides/restrictions/restrictions.md'
import restrictionsCover from './guides/restrictions/prohibition.jpg'

import pathToPrices from './guides/prices/prices.md'
import pricesCover from './guides/prices/checkpoint.jpg'

import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Article source={pathToAbout} cover={{image: aboutCover, alt: 'Пляж на Куршской косе'}} />} />
        <Route path="sights" element={<Article source={pathToSights} cover={{image: sightsCover, alt: 'Смотровая вышка на фоне кустов и Куршского залива'}} />} />
        <Route path="restrictions" element={<Article source={pathToRestrictions} cover={{image: restrictionsCover, alt: 'Знак с предупреждением'}} />} />
        <Route path="prices" element={<Article source={pathToPrices} cover={{image: pricesCover, alt: 'КПП при въезде на Куршскою косу'}}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
