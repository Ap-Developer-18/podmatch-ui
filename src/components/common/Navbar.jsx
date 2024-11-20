import React from 'react'
import Page_Logo from '../../assets/images/png/logo.png'
import Button from './Button'

const Navbar = ({ className }) => {
    return (
        <nav className={`${className}`}>
            <div className="container flex items-center justify-between pt-[18px] pb-4">
                <img className='w-[85px] h-[53px]' src={Page_Logo} alt="Page Logo" />
                <div className='flex items-center gap-[60px]'>
                    <ul className='flex items-center gap-7'>
                        <li className="text-custom-xl leading-127 font-bold text-secondary-color">Product</li>
                        <li className="text-custom-xl leading-127 font-bold text-secondary-color">Explore</li>
                        <li className="text-custom-xl leading-127 font-bold text-secondary-color">Pricing</li>
                    </ul>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <Button transparentBoxText='Docs' />
                    <Button orangeBoxText='Log In' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar