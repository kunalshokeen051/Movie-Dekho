import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movieList' element={<Movies  />}/>
      </Routes>
    </Router>
  );
}

export default App;
