import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import { PencilIcon } from '@heroicons/react/solid'

const Herosection = () => {

    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 10,
        autoplay: true,
        speed: 9000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };

    return (
        <div className="container py-12">
            <div className="row">

            <div className="col-12 col-md-12 col-lg-6">
                <div className="hero-title-card">
                <h1 className="hero-title  text-left pt-12">
                    Create stunning logo designs in few clicks
                </h1>
                
                <p className="hero-description py-3">
                High resolution logos in just few clicks. No design experience necessary. Logos are built  by our top class designers. You just have to select best from the choices available.
                </p>
                </div>


                

                <form action="collecting-data" method="GET">
                <div className="row card-div-4">
                    <div className="col-md-12 d-flex justify-content-center">                    
                    <div class="relative  flex flex-wrap items-stretch">
                <input type="text" name="brand_name" className="search-input relative px-3 w-full h-full bg-white rounded  placeholder-gray-400" placeholder="Enter your brand name" />
                <span class="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/icon/pen.svg"  />
                </span>
                </div>
                <button type="submit" className="search-btn text-white rounded">Genarate Logo</button>                
                    </div>     
                </div>
                </form>

                <div className="flex mt-2 py-2">
                    <p className="trust-point">Excellent</p>
                    <img src="/images/stars-5.svg" className="trust-point-icon"  />
                    <p className="trust-point pl-2">1000+ reviews on</p>
                    <img src="/images/stars-1.svg" className="trust-point-icon"  />
                    <p className="trust-point">Trustpilot</p>
                </div>
              

            </div>



            <div className="col-12 col-md-12 col-lg-6">
                <div className="slider-card px-3">
                <Slider {...settings}>
                <div>
                    <img src="/images/slider/Eriena logo preview.png" />
                </div>
                <div>
                    <img src="/images/slider/LeaFox logo preview.png" />
                </div>
                <div>
                    <img src="/images/slider/Serolin logo preview.png" />
                </div>
                <div>
                    <img src="/images/slider/Spanso Bakers logo preview.png" />
                </div>
                <div>
                    <img src="/images/slider/Youspa logo preview.png" />
                </div>
                </Slider>
            </div>
            </div>
                
                

            </div>
        </div>
    )
}

export default Herosection
