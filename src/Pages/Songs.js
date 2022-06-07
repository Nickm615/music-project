import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
// import { useMatch } from 'react-router-dom';

export default function Songs(props) {

    const [data, setData] = useState();
    const [dict, setDict] = useState({});
        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('song'))};
            getData();
            // const getRelationships = async()=>{
            //     setDict

            // }

        },[]);
        return(
            <div>
                {data? (data.data.items.map((item)=>
                    dict[item.system.id]=
                    <Card key = {item.system.codename} route={`/songs/${item.system.codename}`} title={item.elements.name.value} art={ '?w=100&h=100'}/>
                )):(<h1>Song List</h1>)}
            </div>
        )
}
