import React, { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsFacebook } from 'react-icons/bs';


const Footer = () => {

    return (
        <div className='p-8 text-center'>
            <h2 className='font-serif italic'>&copy;  ALL RIGHT RESERVED ASADUZZAMAN</h2>

            <div className=''>
                <ul className='mx-auto flex  text-2xl bg-base-100 w-32 text-gray-600  p-2 rounded-lg justify-center'>
                    <a className='pr-2 hover:text-red-500' href="">  <AiFillLinkedin /> </a>
                    <a className='pr-2 hover:text-red-500' href="https://github.com/Asaduzzaman14/">  <BsGithub /> </a>
                    <a className='pr-2 hover:text-red-500' href=""><BsFacebook /></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;