import Card from "../Components/Card";
import { useLang, useLangUpdate } from "../Utilities/GlobalContext";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router";

export default function Artists(props) {
    const location = useLocation();
    const lang = useLang();
    const updateLang = useLangUpdate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
        useEffect(() => {
            const preview = location.pathname.includes('preview')
            console.log(preview)
            const getData = async ()=>{
            setData(await GetItemsByType('artist', preview));
            setIsLoaded(true);
            };
            getData();

        },[]);

    switch (lang) {
        case 'en':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} id={item.system.id} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
    
            break;
        case 'es':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} id={item.system.id} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
        
                break;
        case 'fr':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} id={item.system.id} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
    
            break;
        case 'zh':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} id={item.system.id} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
        
                break;
        case 'ar':
            return(
                <div>
                    {isLoaded? (data.data.items.map((item)=>
                        <Card key = {item.system.codename} id={item.system.id} route={`${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                    )):(<SpinnerCircular />)}
                </div>
            )
                
                        break;
        
    

    
    
        default:
            break;
    }
}
