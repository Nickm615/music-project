import SongListItem from "../List Items/SongListItem"

export default function AlbumDetailCard(props) {
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
       
};