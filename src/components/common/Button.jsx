import React from 'react'

const Button = ({ className, orangeBoxText, transparentBoxText }) => {
    return (
        <button className={`rounded-[100px] h-12 px-7 leading-127 text-base font-medium ${orangeBoxText ? "bg-primary-color text-secondary-color" : "bg-transparent text-secondary-color border !border-secondary-color"} ${className}`}>
            {orangeBoxText}{transparentBoxText}
        </button>
    )
}

export default Button