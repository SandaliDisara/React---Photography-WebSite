import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    
      <Router>
        <div className='App'>
          <Routes>
         
        
          <Route path='/' element={<><Navbar/><Home/></>} />
          
          
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;