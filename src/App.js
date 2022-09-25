import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CountUpPage from './Components/CountUpPage/CountUpPage';
import Features from './Components/Features/Features';
import './App.css';

const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <CountUpPage/>
    <Features/>
    </div>
  )
}

export default App;