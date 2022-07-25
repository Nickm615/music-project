import SongListItem from "../List Items/SongListItem"
import { useLocation } from "react-router";
import { useLang, useLangUpdate } from "../../Utilities/GlobalContext";



export default function AlbumDetailCard(props) {
const location = useLocation();
const lang = useLang();
const preview = location.pathname.includes('preview')

if(preview === true){
    switch (lang) {
        case 'en':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/preview/songs/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'es':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/preview/canciones/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'fr':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/preview/chansons/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'zh':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/preview/%E6%AD%8C%E6%9B%B2/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
    
        case 'ar':
        return (
            <div className="card">
                <h2>{props.title}</h2>
                <h3>By {props.artist}</h3>
                <img src= {props.art} alt = 'album image'/>
                <div>
                {props.songs.map((song) => 
                    <SongListItem key = {song.system.codename} route = {`/preview/%D8%A7%D9%84%D8%A3%D8%BA%D8%A7%D9%86%D9%8A/${song.system.codename}`} title = {song.elements.name.value}/>
                        
                )}
    
                </div>
            </div>
        )
    
        break;

    
    
        default:
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/preview/songs/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
    }

} else {
    switch (lang) {
        case 'en':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/songs/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'es':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/canciones/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'fr':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/chansons/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
        case 'zh':
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/%E6%AD%8C%E6%9B%B2/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
    
        case 'ar':
        return (
            <div className="card">
                <h2>{props.title}</h2>
                <h3>By {props.artist}</h3>
                <img src= {props.art} alt = 'album image'/>
                <div>
                {props.songs.map((song) => 
                    <SongListItem key = {song.system.codename} route = {`/%D8%A7%D9%84%D8%A3%D8%BA%D8%A7%D9%86%D9%8A/${song.system.codename}`} title = {song.elements.name.value}/>
                        
                )}
    
                </div>
            </div>
        )
    
        break;

    
    
        default:
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <h3>By {props.artist}</h3>
                    <img src= {props.art} alt = 'album image'/>
                    <div>
                    {props.songs.map((song) => 
                        <SongListItem key = {song.system.codename} route = {`/songs/${song.system.codename}`} title = {song.elements.name.value}/>
                            
                    )}
        
                    </div>
                </div>
            )
        
            break;
    }

}

       
};