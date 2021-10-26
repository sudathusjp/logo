import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PencilIcon } from '@heroicons/react/solid'

const Herosection = () => {
    return (
        <div className="contain py-10">
            <section className="card mr-14">
            <h1 className="text-5xl text-primary-600 font-semibold text-left pt-16">
                Create Stunning logo designs in few clicks
            </h1>
            <p className="text-gray-400 text-left py-4 font-medium text-lg font-Poppins">
            High resolution logos in just few clicks. No design experience necessary. Logos are built  by our top class designers. You just have to select best from the choices available.
            </p>

            <div className="w-5/5 md:flex sm:flex md:w-5/5">
            <div className="md:w-3/5 sm:w-3/5 py-1">
            <div className="flex border-2 hover:shadow-lg focus-within:shadow-lg max-w-full rounded-md px-5 py-3">
                <input 
                type="text" 
                placeholder="Enter your brand name"
                className="flex-grow focus:outline-none" />
                <PencilIcon className="h-5 w-5 text-gray-500"/>
            </div>
            </div>
            <div className="md:w-2/5 sm:w-2/5 py-1">
            <button class="ml-1 w-full bg-primary text-white px-6 py-3 rounded font-Poppins font-semibold ">Genarate Logo</button>
            </div>
            </div>

            </section>

            <section className="card">
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
