import './ContactSection.css'
import React from 'react';
import GoogleMap from './GoogleMap';
import Form4Details from './Form4Details';



const ContactSection = () => {
    return ( 
        <div className="mapformwrapper">
        <GoogleMap />
        <Form4Details />
        </div>
);
};

export default ContactSection ;