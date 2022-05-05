import { Client } from "../Client"
import Card from '../Components/Card'

export default function Home() {
    const songRoute = "/Songs";
    const artistRoute = "/Artists";
    const albumRoute = "/Albums";


    return(
        
        <div className="home">
            <h1>homie page</h1>
            
            <Card route={artistRoute} title='Artists'/>
            <Card route={albumRoute} title = 'Albums'/>
            <Card route={songRoute} title = 'Songs'/>


        </div>
        
    )
}

