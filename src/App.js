import { useState, useEffect } from 'react';
import Lodging from './components/Lodging';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="title"><h1> Welcome to Bunny's Travel</h1></div>
       {/* <p> Please Register to Use Bunny's App</p> */}

      <Router>
        <Routes>
          <Route path='/'element={<Lodging />}/>
            
        
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
