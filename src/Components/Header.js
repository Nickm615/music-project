import React from "react";
import {useLang, useLangUpdate} from '../Utilities/GlobalContext';


function Header(props) {
    const lang = useLang();
    const updateLang = useLangUpdate();
    return (
        <div className = "header">
            <h1 className='header-text'>Welcome to Nick's music blog</h1>
            <p className='header-text'>This is a CHILL ZONE 🧊🧊🧊</p>
            <p>Current language is {lang}</p>
            <div className="lang-selector">
                <button onClick={updateLang} id="en">Spanish</button>
                <button onClick={updateLang} id="es">Spanish</button>
                <button onClick={updateLang} id="fr">French</button>
                <button onClick={updateLang} id="ch">Chinese</button>
                <button onClick={updateLang} id="ar">Arabic</button>

            </div>
        </div>
    )

}

export {Header};