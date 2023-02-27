import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'
import Signin from './components/Signin'

function App() {
const [isSignin, setIsSignin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home  status={isSignin} />}/>
        <Route path='/trending' element={<Movies  />}/>
        <Route path='/signin' element={<Signin status={isSignin} setStatus={setIsSignin}  />}/>
      </Routes>
    </Router>
  );
}

export default App;
