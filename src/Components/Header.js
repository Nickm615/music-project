import React, {useEffect, useState} from "react";
import {useLang, useLangUpdate} from '../Utilities/GlobalContext';
import { GetHeading } from "../Utilities/Query";
import { SpinnerCircular } from 'spinners-react';


function Header(props) {
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async ()=>{
            setData(await GetHeading(lang));
            setIsLoaded(true);
        };
        getData();
        console.log(lang);

    },[lang])
        return (
        <div className = "header">
            {isLoaded? 
            (   
                <div>
                    <h1 className='header-text'>{data.data.item.elements.headingText.value}</h1>
                    <p className='header-text'>{data.data.item.elements.headingText2.value}</p>
                    <p>Current language is {lang}</p>
                    <div className="lang-selector">
                        <button onClick={updateLang} id="en">English</button>
                        <button onClick={updateLang} id="es">Spanish</button>
                        <button onClick={updateLang} id="fr">French</button>
                        <button onClick={updateLang} id="zh">Chinese</button>
                        <button onClick={updateLang} id="ar">Arabic</button>
                    </div>
                </div>
            ):(<SpinnerCircular />)}
        </div>
    )

}

export {Header};