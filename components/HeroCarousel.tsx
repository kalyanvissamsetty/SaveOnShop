"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';

const heroImages = [
  { imgurl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgurl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgurl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgurl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgurl: "/assets/images/hero-5.svg", alt: "chair" },
  
];
function HeroCarousel() {
  return (
    <div className='hero-carousel'>
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={2500} showArrows={false} showStatus={false}>
        {
            heroImages.map((img)=>(
                <Image src={img.imgurl} alt = {img.alt} height={484} width={484} className='object-contain' key={img.alt}/>
            ))
        }
      </Carousel>
    </div>
  );
}

export default HeroCarousel