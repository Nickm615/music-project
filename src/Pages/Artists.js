import Card from "../Components/Card";
import { useLang, useLangUpdate } from "../Utilities/GlobalContext";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';

export default function Artists(props) {
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('artist'));
            setIsLoaded(true);
            };
            getData();

        },[]);

    switch (lang) {
        case 'en':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} route={`/artists/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
    
            break;
        case 'es':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} route={`/artistas/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
        
                break;
        case 'fr':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} route={`/artistes/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
    
            break;
        case 'zh':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} route={`/艺术家/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
        
                break;
        case 'ar':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} route={`/الفنانين/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
                
                        break;
        
    

    
    
        default:
            break;
    }
}
