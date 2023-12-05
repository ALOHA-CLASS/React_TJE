import React from 'react'
import './CustomButton.css'

const CustomButton = ({ text, btnStyle, btnSize, onClick }) => {
    
    return (
        <button className={`btn ${btnStyle} ${btnSize}`} 
                onClick={() => onClick()}>{text}</button>
    )
}

export default CustomButton    