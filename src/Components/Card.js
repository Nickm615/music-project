// This card will be passed the returned data of a random artist/album/song via prop
import { Client } from "../Client"
import {Query} from "../Utilities/Query.js";
import Albums from "../Pages/Albums";
import Artists from "../Pages/Artists";
import Songs from "../Pages/Songs";
import  RandomCover  from "../Utilities/RandomCover.js"
const pHolder = require("../assets/p-holder.jpg")

export default function Card(props) {
    return (
        <a className='card-body' href={props.route}>
            <div className='card'>
                <h2>{props.title}</h2>
                <img src= {props.art} alt = 'placeholder'/>
                <p>{props.title}</p>
            </div>
        </a>
        
    )
}
