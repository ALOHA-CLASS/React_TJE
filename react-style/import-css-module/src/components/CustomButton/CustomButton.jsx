import React from 'react'
// import './CustomButton.css'
import styles from './CustomButton.module.css';

const CustomButton = ({ text, btnStyle, btnSize, onClick }) => {
    
    return (
        <button className={`${styles.btn} ${styles[btnStyle]} ${styles[btnSize]}`} 
                onClick={() => onClick()}>{text}</button>
    )
}

export default CustomButton    