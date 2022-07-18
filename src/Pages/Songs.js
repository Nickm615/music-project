import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useLang, useLangUpdate } from "../Utilities/GlobalContext";


export default function Songs(props) {
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [isLoaded, setisLoaded] = useState(false);
    const [data, setData] = useState();
        useEffect(() => {
            const getData = async ()=>{
                setData(await GetItemsByType('song'))
                setisLoaded(true);
            };
            getData();
        },[]);
        switch (lang) {
            case 'en':
                return(
                    <div>
                        
                        {isLoaded? (data.data.items.map((song)=>
                        <Card key = {song.system.codename} route={`/songs/${song.system.codename}`} title={song.elements.name.value} 
                        art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                        />
                        )):(<SpinnerCircular />)}
                    </div>
                )
        
                break;
            case 'es':
                return(
                    <div>
                        
                        {isLoaded? (data.data.items.map((song)=>
                        <Card key = {song.system.codename} route={`/canciones/${song.system.codename}`} title={song.elements.name.value} 
                        art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                        />
                        )):(<SpinnerCircular />)}
                    </div>
                )
        
                break;
            case 'fr':
                return(
                    <div>
                        
                        {isLoaded? (data.data.items.map((song)=>
                        <Card key = {song.system.codename} route={`/chansons/${song.system.codename}`} title={song.elements.name.value} 
                        art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                        />
                        )):(<SpinnerCircular />)}
                    </div>
                )
            
                    break;
                case 'zh':
                    return(
                        <div>
                            
                            {isLoaded? (data.data.items.map((song)=>
                            <Card key = {song.system.codename} route={`/歌曲/${song.system.codename}`} title={song.elements.name.value} 
                            art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                            />
                            )):(<SpinnerCircular />)}
                        </div>
                    )
                
                        break;
                    case 'ar':
                        return(
                            <div>
                                
                                {isLoaded? (data.data.items.map((song)=>
                                <Card key = {song.system.codename} route={`/الأغاني/${song.system.codename}`} title={song.elements.name.value} 
                                art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                                />
                                )):(<SpinnerCircular />)}
                            </div>
                        )
                    
                            break;
        
        
    
    
        
            default:
                break;
        }
}
