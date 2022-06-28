import { Link } from "react-router-dom"

export default function SongListItem(props) {
    return (
        <Link to={props.route}>
            <div className="">
                <h4>{props.title}</h4>
            </div>
        </Link>
    )
}