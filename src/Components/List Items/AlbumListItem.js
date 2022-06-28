import { Link } from "react-router-dom"

export default function AlbumListItem(props) {
    return (
        <Link to={props.route}>
            <div className="">
                <img src={props.art} alt="album cover"></img>
                <h4>{props.title}</h4>
            </div>
        </Link>
    )
}