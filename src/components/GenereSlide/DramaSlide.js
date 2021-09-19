import React from 'react'
import './generSlide.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {BrowserRouter, Link} from "react-router-dom"

const DramaSlide = () => {
    const [details, setDetails] = useState([]);
    const [movies, setMovies] = useState({ prev: 0, next: 4 });

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?genre=drama&&limit=10')
        .then(response => {
            setDetails(response.data.data.movies);
            
        })
        .catch(error =>{
            alert('error');
        })
    },[])

    const handelPrevBtn = () => {
        if (movies.prev > 0) {
          movies.prev -= 1;
          movies.next -= 1;
        }
        setMovies({ ...movies });
      };
    
      const handelNextBtn = () => {
        if (movies.next < 10) {
          movies.prev += 1;
          movies.next += 1;
        }
        setMovies({ ...movies });
      };
    
   
    return (
        
         <section className="main__slider">
        
        <div className='slider__main'>
        <h2>Genre: Drama</h2>
        
        {movies.prev > 0 ? (
        <FaArrowAltCircleLeft className='left-arrow__slider' onClick={() => handelPrevBtn()}/>) : (
            ""
          )}
        {movies.next < 10 ? (
        <FaArrowAltCircleRight className='right-arrow__slider' onClick={() => handelNextBtn()} />
        ) : (
            ""
          )}
        {details.slice(movies.prev, movies.next)
    
        .map((currMovie, index) => {
            return (
                <div className='main__container'>
              <img src={currMovie.medium_cover_image} alt='movie'  className='image__slider'/>
              <h4>Movie Name:{currMovie.title}</h4>
            <p>Rating:{currMovie.rating}</p>
            <p>Duration:{currMovie.runtime} minutes</p>
            <button>Add to watch</button>
              </div>
            )})}

            <h6> <Link to='/Drama'>See More...</Link></h6>


        
         </div>
         </section>
    
    )
}

export default DramaSlide
