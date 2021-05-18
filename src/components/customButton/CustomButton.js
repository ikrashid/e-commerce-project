import React from 'react';
import './CustomButton.scss';

const CustomButon = ({children, isGoogleSignIn, inverted, ...otherProps}) =>(
    <button className={`${inverted ? 'inverted' : ''} {isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButon;