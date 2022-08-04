import InstrumentListItem from "../List Items/InstrumentListItem";


export default function PerformerDetailCard(props) {
    return(
        <div data-kontent-item-id = {props.id}>
            <h1 data-kontent-element-codename = {props.elements[0].codename}>{props.name}</h1>
            <h3 data-kontent-element-codename = {props.elements[2].codename}>Known for</h3>
            {props.instruments.map((instrument)=>
                <InstrumentListItem codename = {instrument.system.codename} id={instrument.system.id} name={instrument.elements.name.value}/>
            )}
        </div>

    )
}