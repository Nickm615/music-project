import { Link } from "react-router-dom";

export default function PerformerListItem(props) {
    return (
        <Link to={props.route}>
            <div className="">
                <h4>{props.name}</h4>
            </div>

        </Link>
    )
}