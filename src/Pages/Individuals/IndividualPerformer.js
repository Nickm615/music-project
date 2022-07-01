import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetPerformer } from "../../Utilities/Query";
import PerformerDetailCard from "../../Components/DetailCards/PerformerDetailCard";
import { SpinnerCircular } from 'spinners-react';

export default function IndividualPerformer() {
    const [response, setResponse] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetPerformer(params.name));
            setIsLoaded(true)
        };
        getData();
    },[])
    return(
        <div>
            {isLoaded? (<PerformerDetailCard 
            name = {response.data.item.elements.name.value} 
            instruments = {response.data.item.elements.instruments.linkedItems}
            
           />) : (<SpinnerCircular />)}

        </div>
    )
}