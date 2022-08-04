import React, {useEffect, useState} from "react";
import {useLang, useLangUpdate} from '../Utilities/GlobalContext';
import { GetHeading, GetElementCodenames } from "../Utilities/Query";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router";


function Header(props) {
    const location = useLocation();
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
    const [elementData, setElementData ] = useState();

    useEffect(() => {
        const preview = location.pathname.includes('preview')
        const getData = async ()=>{
            setData(await GetHeading(lang, preview));
            setElementData(await GetElementCodenames('heading'))
            setIsLoaded(true);
        };
        getData();
    },[lang])
        return (
        <div className = "header">
            {isLoaded? 
            (   
                <div data-kontent-item-id = {data.data.item.system.id}>
                    <h1 data-kontent-element-codename = {elementData[0]}>{data.data.item.elements.headingText.value}</h1>
                    <p data-kontent-element-codename = {elementData[1]}className='header-text'>{data.data.item.elements.headingText2.value}</p>
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