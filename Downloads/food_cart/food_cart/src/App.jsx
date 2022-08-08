
import './App.css';

import React from 'react'
import Home from './pages/Home';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/cart' element = {<Cart/>}/>
      </Routes>
      

    </Router>
    </>
  )
}

export default App