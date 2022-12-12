import { Fragment, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <div>
        <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      {/*<Route exact path='/archived' component={Archived} />
      <Route exact path='/categories' component={Categories} />
  <Route exact path='/404' component={Err} />*/}
    </Routes>
    </div>
    
  )
}

export default App
