import React from 'react';
import resume from '../../images/Md-Asaduzzaman-resume-(3).PDF'
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import banner from '../../images/banner.png'


const Banner = () => {
    return (
        <div className=' text-base-200 bg-[#13152e]' style={{ background: "" }}>

            <div class="  rounded-2xl p-20 pr-10">
                <div class="grid sm:grid-cols-1 lg:grid-cols-2 justify-center my-auto">

                    <img src={banner} alt="" />

                    <div className='' data-aos="fade-right">
                        <h1 class="text-4xl mt-5 font-bold">Hi! I am <span>Asaduzzaman</span></h1>
                        <p data-aos="fade-right" class="py-6 text-xl">I AM A JUNIOR FRONT-END WEB DEVELOPER</p>


                        <div>
                            <ul className='flex gap-3 text-2xl bg-base-100 w-32 text-gray-600  p-2 rounded-lg justify-center'>
                                <a className='hover:text-red-500' href="">  <AiFillLinkedin /> </a>
                                <a className='hover:text-red-500' href="https://github.com/Asaduzzaman14/">  <BsGithub /> </a>
                                <a className='hover:text-red-500' href=""><BsFacebook /></a>
                            </ul>
                        </div>

                        <div className='flex  my-4 gap-5'>
                            <a href="ContactMe" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                <span class=" relative group-hover:text-white">HIRE ME</span>
                            </a>

                            <a href={resume} download="resume.pdf" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                <span class=" relative group-hover:text-white">Resume</span>
                            </a>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;