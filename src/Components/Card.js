// This card will be passed the returned data of a random artist/album/song via prop
import { Link } from "react-router-dom";
const pHolder = require("../assets/p-holder.jpg")

export default function Card(props) {
    return (
        <Link className='card-body' to={props.route}>
            <div className='card'>
                <h2>{props.title}</h2>
                <img src= {props.art} alt = 'placeholder'/>
            </div>
        </Link>
        
    )
}
