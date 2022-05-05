// This card will be passed the returned data of a random artist/album/song via prop
const pHolder = require("../assets/p-holder.jpg")

export default function Card(props) {
    return (
        <a className='card-body' href='google.com'>
            <div className='card'>
                <h2>props.title probably</h2>
                <img src= {pHolder} />
                <p>Click me to see more</p>
            </div>
        </a>
        
    )
}
