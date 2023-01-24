import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Lodging from './components/Lodging';
import Locations from './components/Locations';
import Attractions from './components/Attractions';
import Navi from './components/NavBar';
import './App.css';
import Packages from './components/Packages';


function App() {
  return (
    <div className="App">
      <div id="title"><h1> Welcome to Bunny's Travel</h1></div>
      {/* //NavBar AINT WORKING - DONT KNOW WHY KASPER */}
      <Navi />
      
      <Router>
        <Routes>
          <Route path='/locations'element={<Locations />}/>
          <Route path='/lodging'element={<Lodging />}/>
        <Route path='/attract'element={<Attractions />}/>
       <Route path='/package'element={<Packages />}/>
                            
        </Routes>
      </Router>

    </div>
  );
}

export default App;
