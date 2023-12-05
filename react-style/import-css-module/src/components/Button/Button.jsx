import React from 'react';
// import './Button.css';
import styles from './Button.module.css';

const Button = ({ id }) => {
  return (
    <button id={id} className={styles.btn}>Button</button>
  )
}

export default Button

