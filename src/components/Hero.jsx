import React from 'react'
import Navbar from './common/Navbar'
import BG_Image_Path from '../assets/images/png/hero.png'
import Hero_Skills from '../assets/images/png/hero-skill.png'
import Paragraph from './common/Paragraph'
import Button from './common/Button'
import Stars_ellipse from '../assets/images/png/hero-stars.png'

const Hero = () => {
    const Hero_Bg = {
        backgroundImage: `url(${BG_Image_Path})`,
    }
    return (
        <div className='bg-center bg-cover bg-no-repeat pb-[122px] relative' style={Hero_Bg}>
            <div className='bg-navbar-gradient pb-px'>
                <div className='bg-body-color'>
                    <Navbar className='backdrop-blur-[100px] !bg-[#00000003]' />
                </div>
            </div>
            <div className="container pt-20">
                <div className="flex items-center justify-between lg:gap-6">
                    <div className="w-7/12">
                        <h1 className='font-bold leading-120 text-custom-4xl text-secondary-color'>Welcome to aman punia portfolio</h1>
                        <Paragraph className='max-w-[514px]' text='Intelligently route every prompt to the best LLM, slashing API costs by up to 99% while ensuring unmatched quality and speed.' />
                        <div className='flex gap-[10px] items-center mt-12'>
                            <Button orangeBoxText='Book a Demo' />
                            <Button transparentBoxText='Try for Free' />
                        </div>
                    </div>
                    <div className="w-5/12 flex justify-end">
                        <img className='max-w-[460px] h-[460px] w-full max-xl:object-contain pointer-events-none' src={Hero_Skills} alt="Hero Skills" />
                    </div>
                </div>
            </div>
            <img className='h-[100px] w-[70px] absolute right-0 bottom-5' src={Stars_ellipse} alt="Stars ellipse" />
        </div>
    )
}

export default Hero