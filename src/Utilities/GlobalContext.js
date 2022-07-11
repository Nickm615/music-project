import React, { useContext,createContext, useState } from 'react';

const LangContext = React.createContext();
const LangUpdateContext = React.createContext()

export function useLang() {
    return useContext(LangContext);
};

export function useLangUpdate() {
    return useContext(LangUpdateContext);
};



export function LanguageProvider ({ children })  {
    const [lang, setLang] = useState('en');

    function updateLanguage(event){
        setLang(event.target.id);
    };

return (
    <LangContext.Provider value = {lang}>
        <LangUpdateContext.Provider value = {updateLanguage}>
            {children}
        </LangUpdateContext.Provider>
    </LangContext.Provider>
);
};




