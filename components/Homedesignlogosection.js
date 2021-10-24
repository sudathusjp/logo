import React from 'react'

const Homedesignlogosection = () => {
    return (
        <div>
        <div className="px-10 py-32 md:px-40 bg-white">
            <section>
                <h1 className="text-gray-700 font-bold text-3xl text-center font-Poppins">
                Design your Dream logo here
                </h1>
            </section>
            <section>
                <form>
                <div className="flex md:px-80 py-10">
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


        <div className="flex md:px-20 md:py-20 md:w-2/2">
            <section className="px-20 py-10 md:w-1/2 md:pr-5">
            <h1 className="text-left text-4xl py-4 font-semibold text-gray-700 font-Poppins">
                Reach with Brandermine
            </h1>
            <p className="text-gray-500 text-left py-2">
            With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.
            </p>
            <button class="my-3 bg-primary text-white px-6 py-3 rounded font-Poppins font-semibold w-32 ">
                Contact Us
            </button>
            <p className="text-gray-500 text-xs font-Poppins my-2">
                Get started with free tools, or get more with our premium software.
            </p>
            </section>
            <section className="md:w-1/2">
            <img src="/images/contact 2 1.png" className="h-96 align-middle" />
            </section>
        </div>



        <div className="bg-light py-10">
        <section className="px-40 py-10">
            <h1 className="text-center text-4xl py-4 font-semibold text-gray-700 font-Poppins">
                Browse logo ideas by industry
            </h1>
        </section>
        <section>
            <div className="grid grid-cols-4 gap-0.5 px-40">
                <div className="industry-card">
                <img src="/images/industry/1.png"/>
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
                <div className="industry-card">
                <img src="/images/industry/1.png" class="img-fluid" />
                <p class="text-white py-2 text-center">Agriclulture</p>
                </div>
            </div>
            <p className="text-center font-semibold font-Poppins">Browse All Industries </p>
        </section>
        

        </div>



        </div>
    )
}

export default Homedesignlogosection
