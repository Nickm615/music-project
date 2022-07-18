import {useEffect, useState} from "react";
import { useLang, useLangUpdate } from "../Utilities/GlobalContext";
import Card from '../Components/Card'
import RandomCover from "../Utilities/RandomCover.js"
import { SpinnerCircular } from 'spinners-react';


export default function Home() {
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [rc, setRc] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
            const getCovers = async ()=>{
                setRc(await RandomCover(3));
                setIsLoaded(true);
            };

            getCovers();
                
            
         
            
            
    
        },[]);



    switch (lang) {
        case 'en':
            return(
                <div className="home">
                    <h1>homie page</h1>
                    {isLoaded? (
                        <div>
                            <Card route="/Artists" title='Artists' art = {rc[0]}/>
                            <Card route="/Albums" title = 'Albums' art = {rc[1]}/>
                            <Card route="/Songs" title = 'Songs' art = {rc[2]}/>
                        </div>
                        
                    ): (<SpinnerCircular />)}
                </div>
                
            )
        case 'es':
            return(
                <div className="home">
                    <h1>homie page</h1>
                    {isLoaded? (
                        <div>
                            <Card route="/artistas" title='Artistas' art = {rc[0]}/>
                            <Card route="/álbumes" title = 'Álbumes' art = {rc[1]}/>
                            <Card route="/canciones" title = 'Canciones' art = {rc[2]}/>
                        </div>
                        
                    ): (<SpinnerCircular />)}
                </div>
                
            )
        case 'fr':
            return(
                <div className="home">
                    <h1>homie page</h1>
                    {isLoaded? (
                        <div>
                            <Card route="/artistes" title='Artistes' art = {rc[0]}/>
                            <Card route="/albums" title = 'Albums' art = {rc[1]}/>
                            <Card route="/chansons" title = 'Chansons' art = {rc[2]}/>
                        </div>
                        
                    ): (<SpinnerCircular />)}
                </div>
                
            )
        case 'zh':
        return(
            <div className="home">
                <h1>homie page</h1>
                {isLoaded? (
                    <div>
                        <Card route="/艺术家" title='艺术家' art = {rc[0]}/>
                        <Card route="/专辑" title = '相册' art = {rc[1]}/>
                        <Card route="/歌曲" title = '歌曲' art = {rc[2]}/>
                    </div>
                    
                ): (<SpinnerCircular />)}
            </div>
            
        )
        case 'ar':
            return(
                <div className="home">
                    <h1>homie page</h1>
                    {isLoaded? (
                        <div>
                            <Card route="/الفنانين" title='الفنانين' art = {rc[0]}/>
                            <Card route="/ألبومات" title = 'ألبومات' art = {rc[1]}/>
                            <Card route="/الأغاني" title = 'الأغاني' art = {rc[2]}/>
                        </div>
                        
                    ): (<SpinnerCircular />)}
                </div>
                
            )
    
        
    

        default:
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
}

