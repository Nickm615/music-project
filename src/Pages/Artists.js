import Card from "../Components/Card";
import { GetItemsByType } from "../Utilities/Query"
import { useEffect, useState  } from "react"

export default function Artists(props) {
const [data, setData] = useState();
    useEffect(() => {
        const getData = async ()=>{
           setData(await GetItemsByType('artist'))
        };
        getData();

    },[])
    return(
        <div>
            {data? (data.data.items.map((item)=>
                <Card title={item.elements.name.value} art={item.elements.photo.value[0].url + '?w=300&h=300'}/>
            )):(<h1>Artist List</h1>)}
        </div>
    )
}
