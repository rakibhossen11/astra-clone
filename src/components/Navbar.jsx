import React from 'react';
import logo from '../assets/astra-logo.svg';

const Navbar = () => {
    return (
        <div className='pt-5 flex justify-between px-3'>
            <img src={logo} alt="" />
            <ul className='text-white flex gap-5 items-center'>
                <li>Starter Templates</li>
                <li>Pro</li>
                <li>Features</li>
                <li>WooCommerce</li>
                <li>Testimonials</li>
                <li>Pricing</li>
                <button className='border-2 border-white rounded-xl px-5 py-3'>Download</button>
            </ul>
        </div>
    );
};

export default Navbar;