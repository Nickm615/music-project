import AlbumListItem from "../List Items/AlbumListItem"
import PerformerListItem from "../List Items/PerformerListItem"

export default function ArtistDetailCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src= {props.art} alt = 'artist image'/>
            <div>
                <h3>Albums</h3>
                {props.albums.map((album) => 
            //    console.log(song)
                <AlbumListItem route = {`/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                    
            )}
                <h3>Performers:</h3>
                {props.performers.map((performer) =>
                <PerformerListItem name={performer.elements.name.value} route = {`/performers/${performer.system.codename}`}/>
                )}

            </div>
        </div>
    )
       
};