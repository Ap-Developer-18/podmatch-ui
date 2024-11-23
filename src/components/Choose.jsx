import React from 'react'
import Choose_Us_bg from "../assets/images/png/choose-us-bg.png"
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Button from './common/Button'
import Star_Image from '../assets/images/png/single-star.png'

const Choose = () => {
    const Choose_Bg = {
        backgroundImage: `url(${Choose_Us_bg})`,
    }
    return (
        <div className='relative'>
            <div className='container max-w-[1188px]'>
                <div className='rounded-[32px] py-6 px-8 border-border-color border bg-cover bg-center bg-no-repeat' style={Choose_Bg}>
                    <Heading text='Why you choose us' className='text-center' />
                    <Paragraph text='Because we provide best to best work to our clients i know you no trust me at starting but you can see my live projects here and tell you suggestions here' className='text-center' />
                    <div className='flex justify-center mt-10'>
                        <Button orangeBoxText='Check Projects' />
                    </div>
                </div>
            </div>
            <img className='absolute left-0 bottom-16' src={Star_Image} alt="Star_Image" />
        </div>
    )
}

export default Choose