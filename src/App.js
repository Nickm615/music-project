import './App.css';
import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import { useLang } from './Utilities/GlobalContext';



function App() {
  const lang = useLang();

  useEffect(() => {
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
