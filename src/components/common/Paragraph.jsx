import React from 'react'

const Paragraph = ({ text, className }) => {
    return (
        <p className={`text-2xl leading-140 text-grey-color font-bold mt-4 ${className}`}>
            {text}
        </p>
    )
}

export default Paragraph
