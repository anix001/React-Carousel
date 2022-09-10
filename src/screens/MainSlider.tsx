import React, { useState } from 'react'
import SilderLayout from '../layout/SilderLayout'
import SliderTabOne from '../modules/slider/SliderTabOne'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { SliderDataArray } from '../utils/sliderdata/SliderDataArray'
import '../assests/css/Slider.scss'

const MainSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = SliderDataArray.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(SliderDataArray) || SliderDataArray.length <= 0) {
        return null;
      }

    console.log("length", length);

    return (
        <div className='main-slider'>
            {
                SliderDataArray?.map((slide:any, index:number)=>{
                    return(
                        <div key={index}>
                            {index === current &&
                               <SilderLayout>
                                   {slide.sliderTab}
                               </SilderLayout>
                            }
                        </div>
                    )
                })
            }
            <SilderLayout>
                <SliderTabOne />
            </SilderLayout>
            <div className="slider-buttons-section">
               <IoIosArrowBack  onClick={prevSlide}/>
               <IoIosArrowForward  onClick={nextSlide}/>
            </div>
        </div>
    )
}

export default MainSlider