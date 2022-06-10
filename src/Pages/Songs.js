import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query";
import { useEffect, useState  } from "react";
// import { useMatch } from 'react-router-dom';

export default function Songs(props) {

    const [data, setData] = useState();
        useEffect(() => {
            const getData = async ()=>{
            setData(await GetItemsByType('song'))};
            getData();
        },[]);
        return(
            <div>
                {data? (data.data.items.map((song)=>
                <Card key = {song.system.codename} route={`/songs/${song.system.codename}`} title={song.elements.name.value} 
                art={song.elements.album.linkedItems[0].elements.artwork.value[0].url + '?w=100&h=100'}
                />
                )):(<h1>Song List</h1>)}
            </div>
        )
}
