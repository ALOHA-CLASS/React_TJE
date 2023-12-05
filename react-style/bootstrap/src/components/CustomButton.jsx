import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS를 추가

const CustomButton = ({ text, btnStyle, btnSize, onClick }) => {
    let buttonClasses = 'btn';

    switch (btnStyle) {
        case 'primary': buttonClasses += ' btn-primary';  break;
        case 'secondary': buttonClasses += ' btn-secondary';  break;
        case 'success': buttonClasses += ' btn-success';  break;
        case 'danger': buttonClasses += ' btn-danger';  break;
        case 'warning': buttonClasses += ' btn-warning';  break;
        case 'info': buttonClasses += ' btn-info';  break;
        case 'light': buttonClasses += ' btn-light';  break;
        case 'dark': buttonClasses += ' btn-dark';  break;
        default: break;
    }

    switch (btnSize) {
        case 'xs': buttonClasses += ' btn-xs'; break;
        case 'sm': buttonClasses += ' btn-sm'; break;
        case 'md': buttonClasses += ' btn-md'; break;
        case 'lg': buttonClasses += ' btn-lg'; break;
        case 'xl': buttonClasses += ' '; break;                 // bootstrap5 버전 btn-xl ❌ deprecated
        case 'block': buttonClasses += ' '; break;              // bootstrap5 버전 btn-block ❌ deprecated
        default: break;
    }

    return (
        <button className={buttonClasses} onClick={() => onClick()}>{text}</button>
    );
}

export default CustomButton;
