import AlbumListItem from "../List Items/AlbumListItem"
import PerformerListItem from "../List Items/PerformerListItem"
import { useLocation } from "react-router";
import { useLang } from "../../Utilities/GlobalContext";

export default function ArtistDetailCard(props) {
    const location = useLocation();
    const lang = useLang();
    const preview = location.pathname.includes('preview')

    if (preview===true){
        switch (lang) {
            case 'en':
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Albums</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/preview/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Performers:</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/performers/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
            case 'es':
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Álbumes</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/preview/%C3%A1lbumes/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Músicos</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/músicos/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
                case 'fr':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>Albums</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/preview/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>Musiciens</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/musiciens/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
                case 'zh':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>专辑</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/preview/%E4%B8%93%E8%BE%91/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>音乐家</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/音乐家/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
                case 'ar':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>ألبومات</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/preview/%D8%A3%D9%84%D8%A8%D9%88%D9%85%D8%A7%D8%AA/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>الموسيقيين</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/الموسيقيين/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
        
        
        
        
        
            default:
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Albums</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/preview/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Performers:</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/preview/performers/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
        }
    
    } else{
        switch (lang) {
            case 'en':
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Albums</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Performers:</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/performers/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
            case 'es':
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Álbumes</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/%C3%A1lbumes/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Músicos</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/músicos/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
                case 'fr':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>Albums</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>Musiciens</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/musiciens/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
                case 'zh':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>专辑</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/%E4%B8%93%E8%BE%91/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>音乐家</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/音乐家/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
                case 'ar':
                    return (
                        <div className="card">
                            <h2>{props.title}</h2>
                            <img src= {props.art} alt = 'artist image'/>
                            <div>
                                <h3>ألبومات</h3>
                                {props.albums.map((album) => 
                            //    console.log(song)
                                <AlbumListItem key = {album.system.codename} route = {`/%D8%A3%D9%84%D8%A8%D9%88%D9%85%D8%A7%D8%AA/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                    
                            )}
                                <h3>الموسيقيين</h3>
                                {props.performers.map((performer) =>
                                <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/الموسيقيين/${performer.system.codename}`}/>
                                )}
                
                            </div>
                        </div>
                    )
                
                    break;
        
        
        
        
        
            default:
                return (
                    <div className="card">
                        <h2>{props.title}</h2>
                        <img src= {props.art} alt = 'artist image'/>
                        <div>
                            <h3>Albums</h3>
                            {props.albums.map((album) => 
                        //    console.log(song)
                            <AlbumListItem key = {album.system.codename} route = {`/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                                
                        )}
                            <h3>Performers:</h3>
                            {props.performers.map((performer) =>
                            <PerformerListItem key = {performer.system.codename} name={performer.elements.name.value} route = {`/performers/${performer.system.codename}`}/>
                            )}
            
                        </div>
                    </div>
                )
            
                break;
        }
    
    }
       
};