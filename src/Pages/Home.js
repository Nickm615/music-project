import { Client } from "../Client"
import {useEffect, useState} from "react";
import Card from '../Components/Card'
import RandomCover from "../Utilities/RandomCover.js"

export default function Home() {
    const songRoute = "/Songs";
    const artistRoute = "/Artists";
    const albumRoute = "/Albums";
    const [rc1, setRc1] = useState();
    const [rc2, setRc2] = useState();
    const [rc3, setRc3] = useState();

    async function wait1() {
        let art1 = await RandomCover();
        setRc1(art1)
        
    
    };
    async function wait2() {
        let art2 = await RandomCover();
        setRc2(art2);
    
    };
    async function wait3() {
        let art3 = await RandomCover();
        setRc3(art3);
    
    }

    useEffect(() => {
        wait1();
        wait2();
        wait3();
    }, []);





    return(
        
        <div className="home">
            <h1>homie page</h1>
            
            <Card route={artistRoute} title='Artists' art = {rc1} />
            <Card route={albumRoute} title = 'Albums' art = {rc2}/>
            <Card route={songRoute} title = 'Songs' art = {rc3}/>


        </div>
        
    )
}

