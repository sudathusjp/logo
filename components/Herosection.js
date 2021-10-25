import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PencilIcon } from '@heroicons/react/solid'


const Herosection = () => {
    return (
        <div className="px-60 py-20 overflow-hidden mx:w-auto md:w-2/2">
        <section className="md:flex">
            <div className="md:w-1/2 px-10 py-10">

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
            </div>

            <div className="md:w-1/2 py-10 pl-10 pr-10">
            <h1 className="text-5xl text-primary-600 font-semibold text-left pt-16 font-Poppins">
                Create Stunning logo designs in few clicks
            </h1>
            <p className="text-gray-400 text-left py-4 font-medium text-lg font-Poppins">
            High resolution logos in just few clicks. No design experience necessary. Logos are built  by our top class designers. You just have to select best from the choices available.
            </p>

            <div className="md:flex md:w-5/5">
            <div className="md:w-3/5">
            <div className="flex border-2 hover:shadow-lg focus-within:shadow-lg max-w-full rounded-md px-5 py-3">
                <input 
                type="text" 
                placeholder="Enter your brand name"
                className="flex-grow focus:outline-none" />
                <PencilIcon className="h-5 w-5 text-gray-500"/>
            </div>
            </div>
            <div className="md:w-2/5">
            <button class="ml-1 w-full bg-primary text-white px-6 py-3 rounded font-Poppins font-semibold ">Genarate Logo</button>
            </div>
            </div>

            </div>
            
        </section>
        
        </div>
    )
}

export default Herosection
