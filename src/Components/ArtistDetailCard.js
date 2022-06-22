import AlbumListItem from "./AlbumListItem"


export default function ArtistDetailCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src= {props.art} alt = 'artist image'/>
            <div>
            {props.albums.map((album) => 
            //    console.log(song)
                <AlbumListItem route = {`/albums/${album.system.codename}`} title = {album.elements.name.value} art = {album.elements.artwork.value[0].url+'?w=100&h=100'}/>
                    
            )}

            </div>
        </div>
    )
       
};