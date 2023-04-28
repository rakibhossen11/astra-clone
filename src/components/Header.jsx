import React from 'react';
import astra from '../assets/astra-templates.webp';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='bg-gradient-to-r bg-indigo-500 to-violet-700'>
            <Navbar></Navbar>
           <div>
           <h2 className='text-xl md:text-5xl text-white font-bold mb-5'>The Most Popular Theme of All Time</h2>
            <p className='text-white font-normal text-sm lg:text-xl'>Fastest, Lightweight, and Highly Customizable WordPress Theme</p>
           </div>
           <button className='bg-yellow-400 text-xl font-normal px-8 py-2 rounded-2xl my-10'>Download Now</button>
           <div>
            <img src={astra} alt="" />
           </div>
        </div>
    );
};

export default Header;