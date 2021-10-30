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
        speed: 92000,
        autoplaySpeed: 94000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };

    return (
        <div className="contain py-10 pb-16">
            <section className="card">
            <div className="hero-title-card">
            <h1 className="hero-title text-5xl text-primary-600 font-semibold text-left pt-16">
                Create stunning logo designs in few clicks
            </h1>
            
            <p className="hero-description py-6">
            High resolution logos in just few clicks. No design experience necessary. Logos are built  by our top class designers. You just have to select best from the choices available.
            </p>
        </div>


    <div class="lg:flex md:flex sm:flex">
    <div class="search-card">
    <div class="relative mb-3 w-full flex flex-wrap items-stretch">
      <input type="text" class="search-input relative px-2 w-full h-full bg-white rounded  border-2 border-gray-300  placeholder-gray-400" placeholder="Enter your brand name" />
      <span class="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
      <img src="/images/icon/pen.svg"  />
      </span>
    </div>
    </div>
    
    <div class="hero-btn-card relative w-full flex flex-wrap items-stretch">
    <button class="search-btn max-w-sm md:max-w-lg text-white rounded w-full">Genarate Logo</button>
    </div>
  </div>

        <div className="flex mt-2 py-2">
            <p className="trust-point">Excellent</p>
            <img src="/images/stars-5.svg" className="trust-point-icon"  />
            <p className="trust-point">1000+ reviews</p>
            <img src="/images/stars-1.svg" className="trust-point-icon"  />
            <p className="trust-point">on Trustpilot</p>
        </div>
        


        </section>

            <section className="card slider-card">
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
            </section>
        </div>
    )
}

export default Herosection
