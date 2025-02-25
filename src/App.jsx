import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Landing/Navbar'
import Hero from './Landing/Hero'
import Herobody from './Landing/Herobody'
import Logo from './Landing/Logo'
import Footer from './Landing/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Herobody/>
      <Logo/>
      <Footer/>
    </>
  )
}

export default App
