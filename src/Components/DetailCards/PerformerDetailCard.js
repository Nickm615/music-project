import InstrumentListItem from "../List Items/InstrumentListItem";


export default function PerformerDetailCard(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>Known for</h3>
            {props.instruments.map((instrument)=>
                <InstrumentListItem name={instrument.elements.name.value}/>
            )}
        </div>

    )
}