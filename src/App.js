import './App.css';
import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import { useLang } from './Utilities/GlobalContext';
import KontentSmartLink, { KontentSmartLinkEvent } from '@kentico/kontent-smart-link';



function App() {
  const lang = useLang();

  useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initializeOnLoad({
      defaultDataAttributes: {
        projectId: "b3e0a132-8366-0046-082c-844a2879e80d",
        languageCodename: "en",
      },
      queryParam: "preview-mode"
    });
    document.body.setAttribute("data-kontent-project-id", "b3e0a132-8366-0046-082c-844a2879e80d");
    document.body.setAttribute("data-kontent-language-codename", `${lang}`)

    return () => {
      kontentSmartLink.destroy();
    };
  },[]);
  // useEffect(()=>{
  //   const plugin = KontentSmartLink.initialize({
  //     queryParam: 'preview-mode',
  //   });    
  //   return () => {
  //     plugin.destroy();
  //   }
  // },[lang]);
  return (
    <Navigation />
    );
}

export default App;
