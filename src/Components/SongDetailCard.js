export default function AlbumDetailCard(props) {
    return (
        <a href={props.link}>
            <div className="card">
                <h2>{props.title}</h2>
                <img src= {props.art} alt = 'album image'/>
            </div>
        </a>
    )
       
};