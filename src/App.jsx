import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar'

import About from './about'
import Services from './services'
import Destinations from './destination'
import Choose from './choose'
import Mission from './mission'
import Contact from './contact'
import Footer from './footer'

function App() {
  return (
   <>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
   <Navbar />
   <About />
    <Services />
    <Destinations />
    <Choose />
    <Mission />
    <Contact />
    <Footer />
        
   </>
  )
}

export default App
