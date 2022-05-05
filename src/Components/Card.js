// This card will be passed the returned data of a random artist/album/song via prop
import { Client } from "../Client"
import Albums from "../Pages/Albums";
import Artists from "../Pages/Artists";
import Songs from "../Pages/Songs";
const pHolder = require("../assets/p-holder.jpg")

export default function Card(props) {
    switch (props.title) {
        case 'Artists':
            let artistQuery = Client.items().type('artist').depthParameter(5)
            artistQuery.toPromise().then(response => {
            let data = response;
            console.log('Artist data received'+ data)
            })
            break;
        case 'Albums':
            let albumQuery = Client.items().type('album').depthParameter(5)
            albumQuery.toPromise().then(response => {
            let data = response;
            console.log('Album data received'+ data)
            })

            break;
        case 'Songs':
            let songQuery = Client.items().type('song').depthParameter(5)
            songQuery.toPromise().then(response => {
            let data = response;
            console.log('Song data received' + data)
            })

            break;
    
        default:
            break;
    }
    
    return (
        <a className='card-body' href={props.route}>
            <div className='card'>
                <h2>{props.title}</h2>
                <img src= {pHolder} />
                <p>{props.title}</p>
            </div>
        </a>
        
    )
}
