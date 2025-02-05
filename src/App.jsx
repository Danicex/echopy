import { useState } from 'react'
import './App.css'
import { AppContext, AppProvider } from './Context/GLobalContext'
import LandingPage from './LandingPage'

function App() {
 

  return (
    <AppProvider>
      <LandingPage />
    </AppProvider>
  )
}

export default App
