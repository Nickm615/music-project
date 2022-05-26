import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetAlbum } from "../Utilities/Query";
import AlbumDetailCard from "../Components/AlbumDetailCard";


export default function IndividualAlbum() {
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetAlbum(params.name))
        };
        getData();
    },[])
  return(
      <div>
          {response? (<AlbumDetailCard title = {response.data.item.elements.name.value} art = {response.data.item.elements.artwork.value[0].url} />) : (<h1>{params.name}</h1>)}
    </div>
  )
}