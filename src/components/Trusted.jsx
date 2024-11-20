import React from 'react'
import Heading from './common/Heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mit_Company from "../assets/images/png/mit.png"
import S_Tree from "../assets/images/png/stree.png"
import Cisco from "../assets/images/png/cisco.png"
import Amazon from "../assets/images/png/amazon.png"
import Nvidia from "../assets/images/png/nvidia.png"
import Spa_cex from "../assets/images/png/spacex.png"
import P_Or_G from "../assets/images/png/porg.png"

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

    return (
        <div className='overflow-hidden pb-[154px]'>
            <Heading className='text-center mx-5' text='Trusted By Developer at' />
            <div className="mt-12 h-[60px]">
                <Slider {...settings}>
                    <div className="pr-[56px]">
                        <img src={Mit_Company} className='w-[134px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={S_Tree} className='w-[72px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Cisco} className='w-[145px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Amazon} className='w-[210px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Nvidia} className='w-[78px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Spa_cex} className='w-[324px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={P_Or_G} className='w-[72px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Mit_Company} className='w-[134px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={S_Tree} className='w-[72px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Cisco} className='w-[145px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Amazon} className='w-[210px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Nvidia} className='w-[78px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={Spa_cex} className='w-[324px] h-[60px]' alt="mit company" />
                    </div>
                    <div className="pr-[56px]">
                        <img src={P_Or_G} className='w-[72px] h-[60px]' alt="mit company" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trusted