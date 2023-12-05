import React from 'react'

const CustomButton = ({ text, btnStyle, btnSize, onClick }) => {

    let color = 'white';
    let backgroundColor = 'black';
    let padding = '12px 24px';
    let display = 'inline-block';
    let fontSize = '14px';
    let width = 'auto';
    let margin = '0 4px';

    switch (btnStyle) {
        case 'primary': backgroundColor = '#007BFF';  break;
        case 'secondary': backgroundColor = '#6C757D';  break;
        case 'success': backgroundColor = '#28A745';  break;
        case 'danger': backgroundColor = '#DC3545';  break;
        case 'warning': backgroundColor = '#FFC107'; color = 'black';  break;
        case 'info': backgroundColor = '#17A2B8';  break;
        case 'light': backgroundColor = '#F8F9FA'; color = 'black';  break;
        case 'dark': backgroundColor = '#343A40';  break;
        default: break;
    }

    switch (btnSize) {
        case 'xs': padding = '2px 8px'; fontSize = '10px'; break;
        case 'sm': padding = '6px 12px'; fontSize = '12px'; break;
        case 'md': padding = '12px 24px'; fontSize = '14px'; break;
        case 'lg': padding = '14px 32px'; fontSize = '16px'; break;
        case 'xl': padding = '18px 40px'; fontSize = '18px'; break;
        case 'block': 
            padding = '18px 40px'; display = 'block'; width = '100%'; 
            margin = '10px 6px'; fontSize = '20px';
        break;
        default: break;
    }

    let style = {
        display : display,
        width: width,
        backgroundColor : backgroundColor,
        color : color,
        fontWeight: 'bold',
        outline: 'none',
        border: 'none',
        margin: margin,
        padding: padding,
        fontSize: fontSize,
        borderRadius: '6px',
        cursor: 'pointer',
    }

    
    return (
        <button style={style} onClick={() => onClick()}>{text}</button>
    )
}

export default CustomButton    