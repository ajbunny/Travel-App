import { useState, useEffect } from 'react';
import Lodging from './components/Lodging';
import Locations from './components/Locations';
import Attractions from './components/Attractions';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Packages from './components/Packages';


function App() {
  return (
    <div className="App">
      <div id="title"><h1> Welcome to Bunny's Travel</h1></div>
       {/* <p> Please Register to Use Bunny's App</p> */}

      <Router>
        <Routes>
          {/* <h3> Location:</h3><Route path='/locations'element={<Locations />}/>
          <h3>Lodging:</h3><Route path='/lodging'element={<Lodging />}/>
          <h3>Attractions</h3><Route path='/attract'element={<Attractions />}/>
          <h3>Packages </h3><Route path='/package'element={<Packages />}/> */}
                            
        </Routes>
      </Router>

    </div>
  );
}

export default App;
