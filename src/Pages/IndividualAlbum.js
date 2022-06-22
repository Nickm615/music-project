import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetAlbum } from "../Utilities/Query";
import AlbumDetailCard from "../Components/AlbumDetailCard";
import songParser from "../Utilities/songParser";


export default function IndividualAlbum() {
    const [albumData, setAlbumData] = useState();
    // const [songData, setSongData] = useState();

    let params = useParams();
    useEffect(()=>{
        const getAlbumData = async ()=>{
            setAlbumData(await GetAlbum(params.name))
        };
        // const  getSongData = async ()=>{
        //     albumData? (setSongData(await songParser(albumData))):getSongData();
        //     return;
        // };

        getAlbumData()
        // getSongData();
        
    },[])
  return(
      <div>
          {albumData? (<AlbumDetailCard title = {albumData.data.item.elements.name.value} art = {albumData.data.item.elements.artwork.value[0].url + '?w=300&h=300'} songs = {albumData.data.item.elements.songs.linkedItems} artist = {albumData.data.item.elements.artist.linkedItems[0].elements.name.value}/>) : (<h1>{params.name}</h1>)}
    </div>
  )
}