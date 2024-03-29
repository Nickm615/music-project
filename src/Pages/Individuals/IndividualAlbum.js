import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetAlbum, GetElementCodenames } from "../../Utilities/Query";
import AlbumDetailCard from "../../Components/DetailCards/AlbumDetailCard";
import { SpinnerCircular } from 'spinners-react';
import { useLocation } from "react-router";


export default function IndividualAlbum() {
    const [data, setData] = useState();
    const [elementData, setElementData] = useState();

    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();


    let params = useParams();
    useEffect(()=>{
        const preview = location.pathname.includes('preview')
        const getData = async ()=>{
            setData(await GetAlbum(params.name, preview))
            setElementData(await GetElementCodenames('album'))
            setIsLoaded(true);
        };

        getData();

        
    },[])
  return(
      <div>
          {isLoaded? (<AlbumDetailCard elements = {elementData} id = {data.data.item.system.id} title = {data.data.item.elements.name.value} art = {data.data.item.elements.artwork.value[0].url + '?w=300&h=300'} songs = {data.data.item.elements.songs.linkedItems} artist = {data.data.item.elements.artist.linkedItems[0].elements.name.value}/>) : (<SpinnerCircular />)}
    </div>
  )
}