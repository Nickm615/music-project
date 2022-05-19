import { ItemMapper } from "@kentico/kontent-delivery";
import { useEffect, useState } from "react";
import { renderMatches, useParams } from "react-router";
import { GetArtist } from "../Utilities/Query";
import Card from "../Components/Card";


export default function IndividualArtist() {
    const [data, setData] = useState(false);
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setData(await GetArtist(params.name))
        };
        getData();
    },[]);
  return(
      <div>
          {data? (<Card title = {data.item.elements.name.value} art = {data.item.elements.photo.value[0].url}></Card>):(<h1>{params.name}</h1>)}
    </div>
  )
}