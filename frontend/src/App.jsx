import { Fragment, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import ArchivedTask from './components/ArchivedTask'
import NavBar from './components/NavBar'
import ListCategories from './components/ListCategories'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/archived' element={<ArchivedTask />} />
      <Route exact path='/categories' element={<ListCategories />} />
    
    </Routes>
    </div>
    
  )
}

export default App
