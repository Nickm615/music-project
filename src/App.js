import './App.css';
import React from 'react';
import   Home  from "./Pages/Home"
import   Albums  from "./Pages/Albums"
import   Artists  from "./Pages/Artists"
import   Songs  from "./Pages/Songs"
import { Client } from './Client';
import { Card } from "./Components/Card";
import { Header } from "./Components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Query } from './Utilities/Query';


function App() {
Query('artist')
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/artists" element={<Artists/>} />
          <Route exact path="/albums" element={<Albums/>} />
          <Route exact path="/songs" element={<Songs />} />
        </Routes>
        
        



      </div>
    </Router>
    
    
    
  );
}

export default App;
