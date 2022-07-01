import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
import { SpinnerCircular } from 'spinners-react';


export default function Albums(props) {

    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('album'))
            setIsLoaded(true);
            };
            getData();

        },[]);
        return(
            <div>
                {isLoaded? (data.data.items.map((item)=>
                    <Card key = {item.system.codename} route={`/albums/${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                )):(<SpinnerCircular />)}
            </div>
        )
}
