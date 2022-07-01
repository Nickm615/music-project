import {useEffect, useState} from "react";
import Card from '../Components/Card'
import RandomCover from "../Utilities/RandomCover.js"
import { SpinnerCircular } from 'spinners-react';


export default function Home() {
    // Single state containing array of rcs
    const [rc, setRc] = useState();
    const [isLoaded, setIsLoaded] = useState(false)
    // One function calling randomcover and getting array
    useEffect(() => {
            const getCovers = async ()=>{
                setRc(await RandomCover(3));
                setIsLoaded(true);
            };

            getCovers();
                
            
         
            
            
    
        },[]);




    return(
        
        <div className="home">
            <h1>homie page</h1>
            {/* Add key corresponding to selected content item ID */}
            {isLoaded? (
                <div>
                    <Card route="/Artists" title='Artists' art = {rc[0]}/>
                    <Card route="/Albums" title = 'Albums' art = {rc[1]}/>
                    <Card route="/Songs" title = 'Songs' art = {rc[2]}/>
                </div>
                
            ): (<SpinnerCircular />)}

            


        </div>
        
    )
}

