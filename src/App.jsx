import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
      <Main />
    </>
  )
}

export default App
