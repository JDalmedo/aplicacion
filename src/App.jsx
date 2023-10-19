import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { Outlet } from 'react-router-dom'
import './App.css'


const App = () => {
  

  return (
    <>
      <Header />
      <Main />
      <Footer/>
      <Outlet/>
    </>
  )
}

export default App
