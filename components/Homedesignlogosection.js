import React from 'react'

const Homedesignlogosection = () => {
    return (
        <div>
        <div className="px-10 md:px-40 bg-white">
            <section>
                <h1 className="card-title">
                Design your Dream logo here
                </h1>
            </section>
            <section>
                <form>
                <div className="flex md:px-20 pb-16">
                <input 
                type="text" 
                placeholder="Enter your company name"
                className="pl-4 py-2 w-full border-2" />
                <button class="ml-1 bg-primary text-white px-6 py-3 rounded font-Poppins font-semibold w-32 ">
                    Get Start
                </button>
                </div>
                </form>
            </section>
        </div>



        <div>
            <img src="/images/brandermind_home.png" className="w-full" />
        </div>


        <div className="flex md:px-20 py-16 md:w-2/2">
            <section className="px-20 md:w-1/2 md:pr-5">
            <h1 className="card-title">
                Reach with Brandermine
            </h1>
            <p className="card-description">
            With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.
            </p>
            <button class="my-3 bg-primary text-white px-6 py-3 rounded font-Poppins font-semibold w-32 ">
                Contact Us
            </button>
            <p className="card-description">
                Get started with free tools, or get more with our premium software.
            </p>
            </section>
            <section className="md:w-1/2">
            <img src="/images/Reach with Brandermine.png" className="h-96 align-middle" />
            </section>
        </div>



        <div className="bg-light pb-16">
        <section className="px-40">
            <h1 className="card-title">
                Browse logo ideas by industry
            </h1>
        </section>
        <section>
            <div className="grid grid-cols-4 gap-4 px-40">

            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/agriculture.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Agriclulture</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/business.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Business</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/idea.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Creative</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/joystick.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Entertainment</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/finance.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Finance</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/capitol.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Government</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/heartbeat.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Health</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/toys.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Kid</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/manufacturing.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Manufacturing</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/social-media.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Marketing</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/user.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Media</p>
                </section>
            </div>
            <div className="industry-card">
                <section class="flex justify-center">
                    <img  src="/images/industry/box.svg" className="h-12" />
                </section>
                <section>
                    <p class="text-white py-2 text-center">Shipping</p>
                </section>
            </div>
            
            
            </div>
            <p className="text-center font-semibold font-Poppins">Browse All Industries </p>
        </section>
        

        </div>



        </div>
    )
}

export default Homedesignlogosection
