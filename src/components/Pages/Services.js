import React from 'react';
import backEnd from '../../images/development.webp'
import frontEnd from '../../images/backend.webp'
import design from '../../images/design.webp'


const Services = () => {
    return (
        <div className='p-10 text-cemter bg-base-200'>
            <div className='text-center'>

                <h2 className='text-3xl mx-auto font-bold'>MY SERVICES</h2>

                <h2 className='text-2xl text-red-600 font-semibold underline underline-offset-8 mt-2'>Whai i do</h2>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mx-auto justify-items-center'>

                <div class="card w-96 lg:max-w-xs  bg-base-100 shadow-xl mt-10">
                    <figure class="px-7 pt-7">
                        <img src={design} class="rounded-xl h-60" alt='' />
                    </figure>
                    <div class="card-body items-center text-center" data-aos="fade-right">
                        <h2 class="card-title">WEB DESIGNER</h2>
                        <p>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.</p>
                        <div class="card-actions">
                            <a href="_" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                <span class=" relative group-hover:text-white">Work With Me</span>
                            </a>

                        </div>
                    </div>
                </div>

                <div class="card w-96 lg:max-w-xs  bg-base-100 shadow-xl mt-10">
                    <figure class="px-7 pt-7">
                        <img src={frontEnd} class="rounded-xl h-60" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">FRONT-END DEVELOPER</h2>
                        <p>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.</p>
                        <div class="card-actions">
                            <a href="_" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                <span class=" relative group-hover:text-white">Work With Me</span>
                            </a>                        </div>
                    </div>
                </div>

                <div class="card w-96 lg:max-w-xs bg-base-100 shadow-xl mt-10">
                    <figure class="px-7 pt-7">
                        <img src={backEnd} class="rounded-xl h-60" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">BCKEND-END DEVELOPER</h2>
                        <p>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.</p>
                        <div class="card-actions">
                            <a href="_" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                <span class=" relative group-hover:text-white">Work With Me</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;