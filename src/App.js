import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    </div>
  )
}

export default App;