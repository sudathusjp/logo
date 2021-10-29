import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PencilIcon } from '@heroicons/react/solid'

const Herosection = () => {
    return (
        <div className="contain py-10">
            <section className="card">
            <h1 className="hero-title text-5xl text-primary-600 font-semibold text-left pt-16">
                Create stunning logo designs in few clicks
            </h1>
            <p className="text-gray-400 text-left py-4 font-medium text-lg font-Poppins">
            High resolution logos in just few clicks. No design experience necessary. Logos are built  by our top class designers. You just have to select best from the choices available.
            </p>

  <div class="lg:flex md:flex">
    <div class="relative mb-3 w-full flex flex-wrap items-stretch">
      <input type="text" class="relative py-3 px-2 pr-10 w-full bg-white rounded shadow outline-none border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Enter your brand name"  />
      <span class="absolute right-0 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
      <PencilIcon className="h-5 w-5 text-gray-500"/>
      </span>
    </div>
    <div class="relative mb-3 w-full flex flex-wrap items-stretch">
    <button class="ml-1 max-w-sm md:max-w-lg bg-primary text-white px-4 py-2 rounded font-Poppins text-sm font-semibold ">Genarate Logo</button>
    </div>
  </div>


            </section>

            <section className="card slider-card">
            <Carousel autoPlay infiniteLoop showStatus="" showThumbs="" interval="5000" transitionTime="2000">
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
            </Carousel>
            </section>
        </div>
    )
}

export default Herosection
