import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

// Default values for the style and size of the button
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];



export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    
    // Check for style and size values, use default if no values found
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <Link to="/sign-up" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}