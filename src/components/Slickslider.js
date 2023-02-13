import React from 'react'
import Slider from "react-slick";
import './style/Slider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.webp'

function Slickslider() {
  var settings = {
    dots: false,
    className:'slider',
    useCSS:true,
    arrows:false,
    infinite: true,
    speed:500,
    lazyLoad:true,
    pauseOnHover:true,
    autoplay:true,
    fade:true,
    slidesToShow:1,
    autoplaySpeed:2500,
    slidesToScroll: 1,
    accessibility:false,
  };

  return (
    <div >
       <Slider {...settings}>
        <div><img src={img1} alt="" /></div>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
        <div><img src={img4} alt="" /></div>
      </Slider>
    </div>
  )
}

export default Slickslider