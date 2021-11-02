import React from 'react'
import Carousel from 'react-grid-carousel';

const Homebrandsection = () => {

    const MyDot = ({ isActive }) => (
        <span
          style={{
            display: 'inline-block',
            height: '10px',
            width: '10px',
            background: '#DDDDDD',
            borderRadius: '5px'
          }}
        ></span>
      )      

    return (
        <div className="brand-container pb-20">
            <div className="container">

            <h1 className="card-title">
                Brands with Brandermine
            </h1>


            <div className="row">
            <div className="col-12 col-md-12 col-lg-12">

            <Carousel dot={MyDot} cols={5} rows={2} gap={15} loop showDots="true">
            <Carousel.Item>
                <img src='/images/icon/logo-01.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
                <img src='/images/icon/logo-02.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-03.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-04.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-05.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-06.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-07.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-08.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-09.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-10.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='/images/icon/logo-01.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
                <img src='/images/icon/logo-02.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-03.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-04.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-05.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-06.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-07.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-08.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-09.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-10.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='/images/icon/logo-01.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
                <img src='/images/icon/logo-02.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-03.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-04.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-05.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-06.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-07.svg' className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-08.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-09.svg' className="carousel-img"/>
            </Carousel.Item>
            <Carousel.Item >
                <img src='/images/icon/logo-10.svg' className="carousel-img"/>
            </Carousel.Item>   
            </Carousel>

            </div>
            </div>

        </div>
        </div>
    )
}

export default Homebrandsection
