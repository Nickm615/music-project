import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetSong } from "../Utilities/Query";
import SongDetailCard from "../Components/SongDetailCard";


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
          {response? (
          <SongDetailCard link = {response.data.item.elements.link.value}
          title = {response.data.item.elements.name.value} 
          art = {response.data.item.elements.album.linkedItems[0].elements.artwork.value[0].url} 
          lyrics = {response.data.item.elements.lyrics.value} 
          album = {response}
          />
          ) : (<h1>{params.name}</h1>)}
    </div>
  )
}