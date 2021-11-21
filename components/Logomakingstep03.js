import React from 'react'
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';

const Logomakingstep03 = () => {

    const router = useRouter()
    const { brand_name, slogan } = router.query

    return (
        <div>

        <div className="container py-10">      

            <div className="row">
            <h3 className="card-semi-title text-center">Choose and custermize your favourite logo</h3>
            <h3 className="txt3 text-center">Buy your logo as is, or customize colors, layout, and texts to get exactly what you need.</h3>
            </div>

            <div className="row pt-10">

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                    <label className="lable1">Brand name <span className="roundhint2">?</span></label>
                <input type="text" name="brand_name" className="input1" placeholder="" defaultValue={brand_name} />
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                    <label className="lable1">Slogan <span className="roundhint2">?</span></label>
                <input type="text" name="brand_name" className="input1" placeholder="" defaultValue={slogan} />
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                    <label className="lable1">Keywords <span className="roundhint2">?</span></label>
                <input type="text" name="brand_name" className="input1" placeholder="" />
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                <label className="lable1">Logo style</label>
                <select className="form-select select-drop1" name="style">
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
                <option value="3">Style 3</option>
                <option value="4">Style 4</option>
                <option value="5">Style 5</option>
                </select>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                <label className="lable1">Color</label>
                <select className="form-select select-drop1" name="color">
                <option value="1">Color 1</option>
                <option value="2">Color 2</option>
                <option value="3">Color 3</option>
                <option value="4">Color 4</option>
                <option value="5">Color 5</option>
                </select>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 pb-2">
                    <button type="submit" className="btn-3 mt-4">Search</button> 
                </div>
            </div>



            <div className="row pt-3">

            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 mb-4">
                <img  src="/images/blog/Right-color.webp" className="filter-logo-image1 img-responsive" />
            </div>
                
            </div>


            </div>


            <div className="card-div-8 py-5">
                <div className="card-div-9">

                <h3 className="card-semi-title-2 text-center">Got something else in mind</h3>
                <h3 className="txt3 text-center">Edit your brief to help us create logos that exactly fit your vision, or work with top designer to create a logo from scratch.</h3>
                
                <div className="card-div-10 flex items-center">
                <button type="button" className="btn-4 mt-2">Edit your brief</button>
                <button type="button" className="btn-5 mt-2">Get premium logo</button>
                </div>

                </div>


            </div>





        </div>
    )
}

export default Logomakingstep03
