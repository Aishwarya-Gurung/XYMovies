import React from 'react'
import { BrowserRouter, Router,  Route, Switch } from 'react-router-dom';

import Slider from './Slider';
import ActionSlide from '../../components/GenereSlide/ActionSlide';
import CrimeSlide from '../../components/GenereSlide/CrimeSlide';
import DramaSlide from '../../components/GenereSlide/DramaSlide';
import ThrillerSlide from '../../components/GenereSlide/ThrillerSlide';
// import { SliderData} from './SliderData';

function Home() {
    return (
        <div>
 {/* //slides={SliderData} */}
       <Slider />
       <ActionSlide />
       <CrimeSlide />
       <DramaSlide />
       <ThrillerSlide />

        </div>
    )
}

export default Home
