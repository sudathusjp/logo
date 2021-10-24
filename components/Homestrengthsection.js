import React from 'react'
import { UsersIcon } from '@heroicons/react/solid'

const Homestrengthsection = () => {
    return (
        <div className="bg-primary px-20 py-20">
            <section>
                <h1 className="text-white font-bold text-3xl text-center font-Poppins">Our strengths</h1>
            </section>
            <section>
            <div className="grid grid-cols-4 md:px-20 py-20">
                <div className="industry-card border-b-2 text-center">
                <UsersIcon className="h-5 w-5 text-white"/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card border-b-2 text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card border-b-2 text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card-end border-b-2 text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
                <div className="industry-card-end text-center">
                <UsersIcon className="h-5 w-5 items-center text-white "/>
                <h1 className="font-semibold font-Poppins text-6xl text-white">10k+</h1>
                <p className="str-text-3">Happy Customers</p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Homestrengthsection
