import React,{useEffect, useState} from 'react'
import Action from './GenerePage/Action';
import './watchlist.css'


const Watch = () => {
    const [data, setData] = useState(Object.values(localStorage));
    const [key, setkeys] = useState(Object.keys(localStorage));

    useEffect(() => {
        if (data.length>0) {
            
        }
        setData(Object.values(localStorage));
        setkeys(Object.keys(localStorage));
    }, [key])


    console.log(key)
    return (
        <div className='watchlist-wrapper'>    
        {
        data.map((item) => {
        const parsedData = JSON.parse(item);
        const isWatchlisted=key.includes("l"+parsedData.id);
        console.log(parsedData.id);
        console.log(isWatchlisted)

        const watchListRemove = (id) =>{
            console.log(parsedData.id);
            localStorage.removeItem("l"+parsedData.id);
            // console.log(parsedData.id);
        }
        return ( 
            <>
          {isWatchlisted===true? 
          <div className="item__watch" >
            <img src={parsedData.medium_cover_image} className="movieImage" />
            <h3>Movie Name:{parsedData.title}</h3>
            <div className="de__item">
            
            <p>Rating:{parsedData.rating}</p>
            <p>Duration:{parsedData.runtime} minutes</p>
            <button onClick={() => watchListRemove(parsedData.id)}>Delete</button>
            </div>

        </div> : "" } 
            
        </>
        );
      })}
    </div>
    
        )
}
export default Watch
