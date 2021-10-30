import Head from 'next/head'
import Herosection from '../components/Herosection'
import Homebrandsection from '../components/Homebrandsection'
import Homecontentsection from '../components/Homecontentsection'
import Homedesignlogosection from '../components/Homedesignlogosection'
import Homestrengthsection from '../components/Homestrengthsection'
import { Navbar } from '../components/Navbar'
import Test from '../components/Test'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
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
     <Herosection />
     <Homebrandsection />
     <Homecontentsection />
     <Homestrengthsection />
     <Homedesignlogosection />

    </div>
  )
}
