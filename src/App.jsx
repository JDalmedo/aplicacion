import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

import './App.css'


const App = () => {
  

  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
