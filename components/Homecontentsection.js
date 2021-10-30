import React from 'react'

const Homecontentsection = () => {
    return (
        <div className="px-20">
            <h1 className="card-title">
                One stop for everything you need
            </h1>

            <div className="md:px-32 overflow-hidden mx:w-auto md:w-2/2">
            <section className="md:flex">
                <div className="md:w-1/2 px-10 py-10">
                <img src="/images/slider/concept.png" />
                </div>

                <div className="md:w-1/2 py-2 pl-10 pr-10">
                <h1 className="card-semi-title">
                Make your brand idea a reality right now!
                </h1>
                <p className="card-description">
                Endless design possibilities. Customize your logo from A to Z choosing from thousands of templates, color combination and detailing discussing with our design team.
                </p>
                <button class="bg-primary text-white font-semibold px-8 py-3 rounded ">Get Start</button>
                </div>            
            </section>        
            </div>

            <div className="md:px-32 overflow-hidden mx:w-auto md:w-2/2">
            <section className="md:flex">
                <div className="md:w-1/2 py-10 pl-10 pr-10">
                <h1 className="card-semi-title">
                Fully customizable logo with our premium package
                </h1>
                <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <button class="bg-danger text-white font-semibold px-8 py-3 rounded ">Get Start</button>
                </div>

                <div className="md:w-1/2 px-10 py-10">
                <img src="/images/slider/development.png" />
                </div>            
            </section>        
            </div>


            <div className="md:px-32 overflow-hidden mx:w-auto md:w-2/2">
            <section className="md:flex">
                <div className="md:w-1/2 px-10 py-10">
                <img src="/images/slider/mediakitdesigns.png" />
                </div> 

                <div className="card-semi-title">
                <h1 className="text-3xl text-gray-700 font-semibold text-left pt-16 font-Poppins">
                Connect with your audience
                </h1>
                <p className="card-description">
                Download high quality logo optimised for business cards, letter heads, social media and more
                </p>
                <button class="bg-success text-white font-semibold px-8 py-3 rounded ">Get Start</button>
                </div>           
            </section>        
            </div>

            <div className="md:px-32 overflow-hidden mx:w-auto md:w-2/2">
            <section className="md:flex">
                <div className="md:w-1/2 py-10 pl-10 pr-10">
                <h1 className="card-semi-title">
                Grow your website. Get going
                </h1>
                <p className="card-description">
                Create your business website with Brandermine and Market to the right audience. Our personal tech team will make it SEO friendly.
                </p>
                <button class="bg-info text-white font-semibold px-8 py-3 rounded ">Get Start</button>
                </div>

                <div className="md:w-1/2 px-10 py-10">
                <img src="/images/slider/Premiumdesign.png" />
                </div>            
            </section>        
            </div>

        </div>


        
    )
}

export default Homecontentsection
