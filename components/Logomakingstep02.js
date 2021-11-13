import React from 'react';
import { useRouter } from 'next/router';

const Logomakingstep02 = () => {

    const router = useRouter()
    const { brand_name, slogan } = router.query

    return (
        <div className="container pb-20">
            
           <div className="row pt-20">
               <div className="col-12 col-sm-12 col-md-6">
                   <p className="step-title">STEP 2/2</p>
                   <div className="d-flex justify-content-start">
                   <div className="step-active"></div>
                   <div className="step-active"></div>
                   </div>

                    <div className="card-div-5">
                   <h3 className="card-semi-title">Tell us about your brand</h3>
                   <h3 className="txt1">Share your story to get a logo that shows and tells it best.</h3>
                   </div>

                    <div className="d-flex justify-content-start">
                   <h2 className="txt2">Select your industry (Up to 3)</h2>
                   <div className="roundhint">?</div>
                   </div>

                   <form action="collecting-data-step-2" method="GET">

                   <input type="text" name="brand_name" className="input1" placeholder="For example brandermine" defaultValue={brand_name} />
                
                   
                   <div className="d-flex justify-content-start pt-8">
                   <h2 className="txt2">Add elements you’d like your logo to include (Optional)</h2>
                   <div className="roundhint">?</div>
                   </div>
                   <input type="text" name="slogan" className="input1" placeholder="Eg: Sun, Dog , book" defaultValue={slogan} />

                   <div className="card-div-6">
                    <a href="collecting-data" className="back-btn"><span className="back-arrow">&#x2190;</span> back</a>   
                   <button type="submit" className="btn-2">Next</button> 
                   </div>

                   </form>
                

               </div>


               <div className="col-12 col-sm-12 col-md-6">
               <div className="card-div-7">
                    <img src="/images/slider/concept.png" className="banner-1" />
                </div>
               </div>
           </div>
            
        </div>
    )
}

export default Logomakingstep02
