import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LanguageProvider} from "./Utilities/GlobalContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div data-kontent-project-id="b3e0a132-8366-0046-082c-844a2879e80d" data-kontent-language-codename="en">
                <LanguageProvider>
                        <App />
                </LanguageProvider>

        </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
