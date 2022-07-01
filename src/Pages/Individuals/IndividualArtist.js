import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetArtist } from "../../Utilities/Query";
import ArtistDetailCard from "../../Components/DetailCards/ArtistDetailCard";
import { SpinnerCircular } from 'spinners-react';

export default function IndividualArtist() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetArtist(params.name));
            setIsLoaded(true);
        };
        getData();
    },[])
  return(
      <div>
          {isLoaded? (<ArtistDetailCard title = {response.data.item.elements.name.value} art = {response.data.item.elements.photo.value[0].url + '?w=300&h=300'} albums = {response.data.item.elements.albums.linkedItems} performers = {response.data.item.elements.performers.linkedItems} />) : (<SpinnerCircular />)}
    </div>
  )
}