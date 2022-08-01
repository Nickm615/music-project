import './App.css';
import React, { useEffect } from 'react';
import Navigation from './Components/Navigation';
import { useLang } from './Utilities/GlobalContext';


function App() {
  const lang = useLang();

  useEffect(()=>{
    document.body.classList.add('data-kontent-project-id="b3e0a132-8366-0046-082c-844a2879e80d"',`data-kontent-language-codename="${lang}"`);
  },[lang]);
  return (
    <Navigation />
    );
}

export default App;
