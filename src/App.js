import './App.css';
import React from 'react';
import   Home  from "./Pages/Home"
import   Albums  from "./Pages/Albums"
import   Artists  from "./Pages/Artists"
import   Songs  from "./Pages/Songs"
import IndividualArtist from './Pages/Individuals/IndividualArtist';
import IndividualAlbum from './Pages/Individuals/IndividualAlbum';
import IndividualSong from './Pages/Individuals/IndividualSong';
import IndividualPerformer from './Pages/Individuals/IndividualPerformer'
import { Header } from "./Components/Header"
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact path="/artists" element={<Artists/>} />
            <Route exact path="/artists/:name" element={<IndividualArtist />}/>
            <Route exact path="/albums" element={<Albums/>} />
              <Route exact path="/albums/:name" element={<IndividualAlbum />}/>
            <Route exact path="/songs" element={<Songs />} />
              <Route path="/songs/:name" element={<IndividualSong />}/>
            <Route path = "/performers/:name" element={<IndividualPerformer/>}/>



        </Routes>
        
        



      </div>
    </Router>
    
    
    
  );
}

export default App;
