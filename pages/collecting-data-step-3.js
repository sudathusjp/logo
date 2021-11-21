import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import Logomakingstep03 from '../components/Logomakingstep03';
import Footer2 from '../components/Footer2';



const collecting_data_step_3 = () => {

    const router = useRouter()
    const { brand_name } = router.query

    return (
        
        <div>
        <Head>
            <title>BranderMind</title>
            <link rel="icon" href="/favicon.ico" />        
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />   
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />  
        </Head>

            <Navbar />
            <Logomakingstep03 />
            <Footer2 />
            
        </div>
    )
}

export default collecting_data_step_3
