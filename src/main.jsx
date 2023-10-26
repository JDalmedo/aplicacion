import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Herram from './pages/Herram/Herram'
import NotFound from './pages/NotFound/NotFound'
import Motores from './pages/Motores/Motores'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='/herram' element={<Herram />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/motores' element={<Motores />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
