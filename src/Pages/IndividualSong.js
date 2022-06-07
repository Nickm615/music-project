import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetSong } from "../Utilities/Query";
import SongDetailCard from "../Components/AlbumDetailCard";


export default function IndividualSong() {
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetSong(params.name))
        };
        getData();
    },[])
  return(
      <div>
          {response? (<SongDetailCard link = {response.data.items[0].elements.link.value}title = {response.data.item.elements.name.value} art = {response.data.item.elements.artwork.value[0].url} />) : (<h1>{params.name}</h1>)}
    </div>
  )
}