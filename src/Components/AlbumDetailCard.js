export default function AlbumDetailCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src= {props.art} alt = 'album image'/>
        </div>
    )
       
};