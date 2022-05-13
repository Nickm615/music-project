import {useEffect, useState} from "react";
import Card from '../Components/Card'
import RandomCover from "../Utilities/RandomCover.js"

export default function Home() {
    const songRoute = "/Songs";
    const artistRoute = "/Artists";
    const albumRoute = "/Albums";
    // Single state containing array of rcs
    const [rc, setRc] = useState();
    // One function calling randomcover and getting array
    useEffect(() => {
            const getCovers = async ()=>{
                setRc(await RandomCover(3))
            };

            getCovers();
                
            
         
            
            
    
        },[]);




    return(
        
        <div className="home">
            <h1>homie page</h1>
            {/* Add key corresponding to selected content item ID */}
            {rc? (
                <div>
                    <Card route={artistRoute} title='Artists' art = {rc[0]}/>
                    <Card route={albumRoute} title = 'Albums' art = {rc[1]}/>
                    <Card route={songRoute} title = 'Songs' art = {rc[2]}/>
                </div>
                
            ): (
                <div>
                </div>
    
            )}

            


        </div>
        
    )
}

