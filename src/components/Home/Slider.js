import React, { useState, useEffect } from 'react'
import './slider.css';
// import { SliderData } from './SliderData';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = () => {//{slides}
const [current, setCurrent] = useState(0);
// const length= slides.length


const [images, setImages] = useState([]);
const length = images.length

useEffect(()=>{
    axios.get('https://yts.mx/api/v2/list_movies.json?limit=4')
    .then(response => {
        setImages(response.data.data.movies);
        
    })
    .catch(error =>{
        alert('error');
    })
},[])
console.log(images);

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);//if current slide chae 3 chabhana o ma jani natra plus one garni
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);// if cuurrent 0 cha bhana 3 ma jancha natra 2 or so on ma
  };


if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

    return (
        <section className="main">
        <h1 className="sliderHeading">Upcoming Movies</h1>
        <div className='slider'>
        
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {images.map((slide, index)=>{
                return(
                    <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.large_cover_image} alt='movie' className='image' />
            )}
          </div>
                )
            })}
        </div>
        </section>
    )
}

export default Slider
