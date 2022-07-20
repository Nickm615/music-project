import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useLang, useLangUpdate } from "../Utilities/GlobalContext";
import { useLocation } from "react-router";



export default function Albums(props) {
    const location = useLocation();
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            const preview = location.pathname.includes('preview')
            const getData = async ()=>{
            setData(await GetItemsByType('album', preview))
            setIsLoaded(true);
            };
            getData();

        },[]);
        switch (lang) {
            case 'en':
                return(
                    <div>
                        {isLoaded? (data.data.items.map((item)=>
                            <Card key = {item.system.codename} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                        )):(<SpinnerCircular />)}
                    </div>
                )        
                break;
            case 'es':
                return(
                    <div>
                        {isLoaded? (data.data.items.map((item)=>
                            <Card key = {item.system.codename} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                        )):(<SpinnerCircular />)}
                    </div>
                )        
                break;
            case 'fr':
                return(
                    <div>
                        {isLoaded? (data.data.items.map((item)=>
                            <Card key = {item.system.codename} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                        )):(<SpinnerCircular />)}
                    </div>
                )        
                break;
            case 'zh':
                return(
                    <div>
                        {isLoaded? (data.data.items.map((item)=>
                            <Card key = {item.system.codename} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                        )):(<SpinnerCircular />)}
                    </div>
                )        
                break;
            case 'ar':
                return(
                    <div>
                        {isLoaded? (data.data.items.map((item)=>
                            <Card key = {item.system.codename} route={`/${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                        )):(<SpinnerCircular />)}
                    </div>
                )        
                break;
    
    
          
    
            default:
                break;
        }
}
