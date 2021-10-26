import Head from 'next/head'
import Herosection from '../components/Herosection'
import Homebrandsection from '../components/Homebrandsection'
import Homecontentsection from '../components/Homecontentsection'
import Homedesignlogosection from '../components/Homedesignlogosection'
import Homestrengthsection from '../components/Homestrengthsection'
import { Navbar } from '../components/Navbar'
import Test from '../components/Test'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap" rel="stylesheet" /> 
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
