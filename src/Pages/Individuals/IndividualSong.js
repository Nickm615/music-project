import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetSong } from "../../Utilities/Query";
import SongDetailCard from "../../Components/DetailCards/SongDetailCard";
import { SpinnerCircular } from 'spinners-react';
import {useLang, useLangUpdate} from "../../Utilities/GlobalContext"
import { useLocation } from "react-router";


export default function IndividualSong() {
    const lang = useLang();
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState();
    let params = useParams();
    const location = useLocation();

    useEffect(()=>{
        const preview = location.pathname.includes('preview')
        const getData = async ()=>{
            setResponse(await GetSong(params.name, lang, preview))
            setIsLoaded(true)
        };
        getData();
    },[lang])
  return(
      <div>
          {isLoaded? (
          <SongDetailCard link = {response.data.item.elements.link.value}
          title = {response.data.item.elements.name.value} 
          art = {response.data.item.elements.album.linkedItems[0].elements.artwork.value[0].url} 
          lyrics = {response.data.item.elements.lyrics} 
          album = {response}
          />
          ) : (<SpinnerCircular />)}
    </div>
  )
}