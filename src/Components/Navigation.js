import React, {useEffect, useState} from "react";
import {useLang, useLangUpdate} from '../Utilities/GlobalContext';
import Home  from "../Pages/Home"
import Albums  from "../Pages/Albums"
import Artists  from "../Pages/Artists"
import Songs  from "../Pages/Songs"
import IndividualArtist from '../Pages/Individuals/IndividualArtist';
import IndividualAlbum from '../Pages/Individuals/IndividualAlbum';
import IndividualSong from '../Pages/Individuals/IndividualSong';
import IndividualPerformer from '../Pages/Individuals/IndividualPerformer'
import { Header } from "./Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Navigation() {
    const lang = useLang();
    const updateLang = useLangUpdate();
    
  
    let [routes, setRoutes] = useState({
        artists: 'artists',
        albums: 'albums',
        songs: 'songs',
        performers: 'performers'
     })
  
    useEffect(()=>{
        switch (lang) {

          case 'es':
              setRoutes({            
                artists: 'artistas',
                albums: '/%C3%A1lbumes',
                songs: 'canciones',
                performers: 'músicos'
            })
            break;
          case 'fr':
            setRoutes({            
                artists: 'artistes',
                albums: 'albums',
                songs: 'chansons',
                performers:'musiciens'
            })
            break;
          case 'zh':
            setRoutes({            
                artists: '/%E8%89%BA%E6%9C%AF%E5%AE%B6',
                albums: '/%E4%B8%93%E8%BE%91',
                songs: '/%E6%AD%8C%E6%9B%B2',
                performers:'音乐家'
            })
            break;
          case 'ar':
            setRoutes({            
                artists: '/%D8%A7%D9%84%D9%81%D9%86%D8%A7%D9%86%D9%8A%D9%86',
                albums: '/%D8%A3%D9%84%D8%A8%D9%88%D9%85%D8%A7%D8%AA',
                songs: '/%D8%A7%D9%84%D8%A3%D8%BA%D8%A7%D9%86%D9%8A',
                performers: 'الموسيقيين'
            })
            break;
            case 'en':
                setRoutes({            
                  artists: 'artists',
                  albums: 'albums',
                  songs: 'songs',
                  performers: 'performers'
              })
  
      
        
      
        
        
          default:
            break;
    
        };
        console.log(routes)
      
      },[lang]);

      return (
        <Router>
          <div className="App">
            <h1>{lang}</h1>
            
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path={`/${routes.artists}`} element={<Artists/>} />
              <Route exact path={`/${routes.artists}/:name`} element={<IndividualArtist />}/>
              <Route exact path={`/${routes.albums}`} element={<Albums/>} />
              <Route exact path={`/${routes.albums}/:name`} element={<IndividualAlbum />}/>
              <Route exact path={`/${routes.songs}`} element={<Songs />} />
              <Route exact path={`/${routes.songs}/:name`} element={<IndividualSong />}/>
              <Route exact path = {`/${routes.performers}/:name`} element={<IndividualPerformer/>}/>
  
  
  
            </Routes>
            
            
  
  
  
          </div>
        </Router>
  
      
      
      
    );
  
    
}

export default Navigation;
