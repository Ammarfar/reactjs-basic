import React from 'react'

export const CustomButton = ({ customClick, title }) => {
    return (
        <button onClick={customClick}>
            {title}
        </button>
    )
}
