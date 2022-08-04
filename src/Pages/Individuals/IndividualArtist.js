import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetArtist, GetElementCodenames } from "../../Utilities/Query";
import ArtistDetailCard from "../../Components/DetailCards/ArtistDetailCard";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router";

export default function IndividualArtist() {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [elementData, setElementData] = useState();
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const preview = location.pathname.includes('preview')
        const getData = async ()=>{
            setResponse(await GetArtist(params.name, preview));
            setElementData(await GetElementCodenames('artist'));
            setIsLoaded(true);
        };
        getData();
    },[])
  return(
      <div>
          {isLoaded? (<ArtistDetailCard id = {response.data.item.system.id} elements = {elementData} title = {response.data.item.elements.name.value} art = {response.data.item.elements.photo.value[0].url + '?w=300&h=300'} albums = {response.data.item.elements.albums.linkedItems} performers = {response.data.item.elements.performers.linkedItems} />) : (<SpinnerCircular />)}
    </div>
  )
}