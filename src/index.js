import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './components/articles/About'
import Sights from './components/articles/Sights'
import ForbiddenPlaces from './components/articles/ForbiddenPlaces'
import Prices from './components/articles/Prices'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='sights' element={<Sights />} />
        <Route path='forbidden-places' element={<ForbiddenPlaces />} />
        <Route path='prices' element={<Prices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals();
