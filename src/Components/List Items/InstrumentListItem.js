export default function InstrumentListItem(props) {
    return(
        <div data-kontent-item-id = {props.id} className="list-item">
            <h4 data-kontent-element-codename= {props.codename}>{props.name}</h4>
        </div>
    )
}