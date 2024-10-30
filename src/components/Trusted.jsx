import React from 'react'
import Heading from './common/Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trusted = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };

    // const items = Array.from({ length: 10 }, (_, index) => (
    //     <div key={index}>
    //         <div className='w-40 h-16 bg-white'>
    //             {index + 1}
    //         </div>
    //     </div>
    // ));

    return (
        <div className='overflow-hidden'>
            <Heading className='text-center mx-5' text='Trusted By Developer at' />
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            1
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            2
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            3
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            4
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            5
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            6
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            7
                        </div>
                    </div>
                    <div>
                        <div className='w-40 h-16 bg-white'>
                            8
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trusted