import Head from 'next/head'
import Herosection from '../components/Herosection'
import Homebrandsection from '../components/Homebrandsection'
import Homecontentsection from '../components/Homecontentsection'
import Homedesignlogosection from '../components/Homedesignlogosection'
import Homestrengthsection from '../components/Homestrengthsection'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BranderMind</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
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
