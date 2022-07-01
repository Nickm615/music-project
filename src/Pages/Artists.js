import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';

export default function Artists(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('artist'));
            setIsLoaded(true);
            };
            getData();

        },[]);
        return(
            <div>
                {isLoaded? (data.data.items.map((item)=>
                    <Card key = {item.system.codename} route={`/artists/${item.system.codename}`} title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=100&h=100'}/>
                )):(<SpinnerCircular />)}
            </div>
        )
}
