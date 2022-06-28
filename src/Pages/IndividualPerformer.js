import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { GetPerformer } from "../Utilities/Query";
import PerformerDetailCard from "../Components/PerformerDetailCard";


export default function IndividualPerformer() {
    const [response, setResponse] = useState();
    let params = useParams();
    useEffect(()=>{
        const getData = async ()=>{
            setResponse(await GetPerformer(params.name))
        };
        getData();
    },[])
    return(
        <div>
            {response? (<PerformerDetailCard 
            name = {response.data.item.elements.name.value} 
            instruments = {response.data.item.elements.instruments.linkedItems}
            
           />) : (<h1>{params.name}</h1>)}

        </div>
    )
}