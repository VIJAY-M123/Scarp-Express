import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import NavBar from './NavBar'
import About from '../About'
import Image from '../Image'
import Contact from '../Contact'
import Service from '../Service'

function NavbarIndex() {
  return (
  <>
  <NavBar/>
  
  <Routes>
  <Route path="/" element={<Home/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/image" element={<Image/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/service" element={<Service/>}/>
  
  </Routes>
  </>
    
   
  )
}

export default NavbarIndex