import React from 'react'

const Heading = ({ text, className }) => {
    return (
        <h2 className={`${className} font-medium text-5xl leading-130 text-secondary-color`}>
            {text}
        </h2>
    )
}

export default Heading