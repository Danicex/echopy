import { useState } from 'react'
import './App.css'
import { AppContext, AppProvider } from './Context/GLobalContext'
import LandingPage from './LandingPage'
import Services from './Service'
import Contact from './Contact'
import Blog from './Blog'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'

function App() {
 

  return (
    <AppProvider>
    <Routes>
     
      <Route  path={'/'} element={ <LandingPage />} />
      <Route  path={'/service'} element={<Services/>} />
      <Route  path={'/contact'} element={<Contact/>} />
      <Route  path={'/blog'} element={<Blog/>} />
      <Route  path={'/about'} element={<AboutUs/>} />
    </Routes>
    </AppProvider>
  )
}

export default App
