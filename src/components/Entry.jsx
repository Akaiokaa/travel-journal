import './Entry.css'

// function Entry(props) {
//     console.log(props)
//     return (
//         <article className='journal-entry'>
//             <div className="main-image-container">
//                 <img className="main-image" src={props.el.img.src} alt={props.el.img.alt} />
//             </div>
//             <div>
//                 <img src="marker.png" alt="map marker icon" />
//                 <span>{props.el.country}</span>
//                 <a href={props.el.googleMapsLink}>
//                 View on Google Maps</a>
//                 <h2>{props.el.title}</h2>
//                 <p>{props.el.dates}</p>
//                 <p>{props.el.text}</p>
//             </div>
            
//         </article>
//     )
// }

function Entry(props) {
    console.log(props)
    return (
        <article className='journal-entry'>
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="second-image-container">
                <img className="marker" src="marker.png" alt="map marker icon" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>
                View on Google Maps</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
            
        </article>
    )
}

export default Entry;