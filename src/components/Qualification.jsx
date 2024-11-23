import React from 'react'
import Heading from './common/Heading'
import Qualification_Img from '../assets/images/png/qualification.png'
import Circle_Ellipse from '../assets/images/png/circle-ellipse.png'
import Qualification_Star from '../assets/images/png/qualification-star.png'

const Qualification = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='pt-[154px] container max-w-[1188px]'>
                <div className="bg-qualification-color px-12 py-9 rounded-[32px] flex items-center justify-between">
                    <div className='w-1/2 lg:max-w-[480px]'>
                        <Heading text='My Qualification' />
                        <p className='text-2xl leading-140 text-grey-color font-bold mt-4'>1. 12th with 80% marks in non-medical in 2022</p>
                        <p className='text-2xl leading-140 text-grey-color font-bold'>2. After that, worked on Frontend Web Development</p>
                        <p className='text-2xl leading-140 text-grey-color font-bold'>3. From 2023 to 2024, I completed my Frontend course from Radial Code</p>
                        <p className='text-2xl leading-140 text-grey-color font-bold'>4. During the course, I worked on live projects</p>
                        <p className='text-2xl leading-140 text-grey-color font-bold'>5. For the certificate, click on the button below</p>
                    </div>
                    <div className='w-1/2'>
                        <img src={Qualification_Img} className='w-[558px] object-cover object-center' width={588} height={499} alt="qualification-img" />
                    </div>
                </div>
            </div>
            <img src={Circle_Ellipse} className='absolute left-0 top-0' alt="Circle Ellipse" />
            <img src={Circle_Ellipse} className='absolute -right-12 top-12 rotate-180' alt="Circle Ellipse" />
            <img src={Qualification_Star} className='absolute right-6 top-[332px]' alt="Circle Ellipse" />
        </div>
    )
}

export default Qualification