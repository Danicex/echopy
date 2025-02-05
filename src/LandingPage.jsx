import React, { useContext } from 'react'
import { AppContext } from './Context/GLobalContext'
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export default function LandingPage() {
    const {theme, setTheme} = useContext(AppContext)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
  return (
    <div>
    {theme === 'light' ? (<FaToggleOff id='theme-icon' onClick={toggleTheme}/>) : (<FaToggleOn onClick={toggleTheme} id='theme-icon'/>)}

    <div  className="text-3xl font-bold m-auto">LandingPage</div>
    </div>
  )
}
