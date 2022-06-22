import SongListItem from "./SongListItem"
import { Link } from "react-router-dom"

export default function AlbumDetailCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <h3>By {props.artist}</h3>
            <img src= {props.art} alt = 'album image'/>
            <div>
            {props.songs.map((song) => 
            //    console.log(song)
                <SongListItem route = {`/songs/${song.system.codename}`} title = {song.elements.name.value}/>
                    
            )}

            </div>
        </div>
    )
       
};