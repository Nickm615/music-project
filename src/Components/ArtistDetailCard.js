


export default function ArtistDetailCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src= {props.art} alt = 'artist image0'/>
        </div>
    )
       
};