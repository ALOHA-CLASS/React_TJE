import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 

const CustomButton = ({ text, btnStyle, btnSize, onClick }) => {
    let variant = 'primary';

    switch (btnStyle) {
        case 'secondary': variant = 'secondary';  break;
        case 'success': variant = 'success';  break;
        case 'danger': variant = 'danger';  break;
        case 'warning': variant = 'warning';  break;
        case 'info': variant = 'info';  break;
        case 'light': variant = 'light';  break;
        case 'dark': variant = 'dark';  break;
        default: break;
    }

    let size = '';

    switch (btnSize) {
        case 'xs': size = 'sm'; break;
        case 'sm': size = 'sm'; break;
        case 'md': size = ''; break;
        case 'lg': size = 'lg'; break;
        default: break;
    }

    return (
        <Button variant={variant} size={size} onClick={() => onClick()}>{text}</Button>
    );
}

export default CustomButton;
