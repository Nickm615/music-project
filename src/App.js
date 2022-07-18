import './App.css';
import React from 'react';
import Home  from "./Pages/Home"
import Albums  from "./Pages/Albums"
import Artists  from "./Pages/Artists"
import Songs  from "./Pages/Songs"
import IndividualArtist from './Pages/Individuals/IndividualArtist';
import IndividualAlbum from './Pages/Individuals/IndividualAlbum';
import IndividualSong from './Pages/Individuals/IndividualSong';
import IndividualPerformer from './Pages/Individuals/IndividualPerformer'
import { Header } from "./Components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useLang, useLangUpdate } from './Utilities/GlobalContext';
import { LanguageProvider } from './Utilities/GlobalContext';
import Navigation from './Components/Navigation';


function App() {
  // const lang = useLang();
  // const updateLang = useLangUpdate();
  

  // let routes = {
  //    artists: 'artists',
  //    albums: 'albums',
  //    songs: 'songs'
  // }


  // useEffect(()=>{
  //   console.log(lang)
  //   switch (lang) {
  //     case 'es':
  //       routes.artists = 'artistas';
  //       routes.albums = 'álbumes';
  //       routes.songs = 'canciones';
  //       break;
  //     case 'fr':
  //       routes.artists = 'artistes';
  //       routes.albums = 'albums';
  //       routes.songs = 'chansons';
  //       break;
  //     case 'zh':
  //       routes.artists = '艺术家';
  //       routes.albums = '专辑';
  //       routes.songs = '歌曲';
  //       break;
  //     case 'ar':
  //       routes.artists = 'الفنانين';
  //       routes.albums = 'ألبومات';
  //       routes.songs = 'الأغاني';
  //       break;
  
    
  
    
    
  //     default:
  //       break;

  //   }
  
  // },[lang])
  return (
    <Navigation />
      // <Router>
      //   <div className="App">
      //     <h1>{lang}</h1>
          
      //     <Header/>
      //     <Routes>
      //       <Route exact path="/" element={<Home/>} />
      //       <Route exact path={`/${routes.artists}`} element={<Artists/>} />
      //       <Route exact path="/artists/:name" element={<IndividualArtist />}/>
      //       <Route exact path="/albums" element={<Albums/>} />
      //       <Route exact path="/albums/:name" element={<IndividualAlbum />}/>
      //       <Route exact path="/songs" element={<Songs />} />
      //       <Route exact path="/songs/:name" element={<IndividualSong />}/>
      //       <Route exact path = "/performers/:name" element={<IndividualPerformer/>}/>



      //     </Routes>
          
          



      //   </div>
      // </Router>

    
    
    
  );
}

export default App;
