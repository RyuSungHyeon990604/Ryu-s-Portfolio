"use client";
import React from "react";
import { Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



export default function Slider() {
    const skills=["css","html","java","javascript","jQuery","mysql","nextjs","react","springboot"]

  return (
    <Swiper
    slidesPerView={5}
    autoplay={true}
    loop={true}
    modules={[Autoplay]}
  >{skills.map(skill=>{
    return(
    <SwiperSlide key={skill}>
        <img src ={`/skill/${skill}.png`}/>
     </SwiperSlide>)
    
  })}
      
    </Swiper>
  );
}
