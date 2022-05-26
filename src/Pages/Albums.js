import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
// import { useMatch } from 'react-router-dom';

export default function Albums(props) {

    const [data, setData] = useState();
        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('album'))
            };
            getData();

        },[]);
        return(
            <div>
                {data? (data.data.items.map((item)=>
                    <Card key = {item.system.codename} route={`/albums/${item.system.codename}`} title={item.elements.name.value} art={item.elements.artwork.value[0].url + '?w=100&h=100'}/>
                )):(<h1>Album List</h1>)}
            </div>
        )
}
