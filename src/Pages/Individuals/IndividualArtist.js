import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetArtist } from "../../Utilities/Query";
import ArtistDetailCard from "../../Components/DetailCards/ArtistDetailCard";


export default function IndividualArtist() {
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetArtist(params.name))
        };
        getData();
    },[])
  return(
      <div>
          {response? (<ArtistDetailCard title = {response.data.item.elements.name.value} art = {response.data.item.elements.photo.value[0].url + '?w=300&h=300'} albums = {response.data.item.elements.albums.linkedItems} performers = {response.data.item.elements.performers.linkedItems} />) : (<h1>{params.name}</h1>)}
    </div>
  )
}