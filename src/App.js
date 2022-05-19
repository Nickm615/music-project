import './App.css';
import React from 'react';
import   Home  from "./Pages/Home"
import   Albums  from "./Pages/Albums"
import   Artists  from "./Pages/Artists"
import   Songs  from "./Pages/Songs"
import IndividualArtist from './Pages/IndividualArtist';
import { Header } from "./Components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/artists" element={<Artists/>} />
          <Route exact path="/albums" element={<Albums/>} />
          <Route exact path="/songs" element={<Songs />} />
          <Route exact path="/artists/:name" element={<IndividualArtist />}/>


        </Routes>
        
        



      </div>
    </Router>
    
    
    
  );
}

export default App;
