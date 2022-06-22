import parse from 'html-react-parser';

export default function SongDetailCard(props) {
    return (
        <a href={props.link}>
            <div className="card">
                <h2>{props.title}</h2>
                <img src= {props.art + '?w=300&h=300'} alt = 'album image'/>
                
                
                <div>
                    <h1>lyrics</h1>
                    {console.log(parse(props.lyrics))}
                    {parse(props.lyrics)}
                </div>
                
            </div>
        </a>
    )
       
};