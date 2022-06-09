import React from 'react';
import backEnd from '../../images/development.webp'
import frontEnd from '../../images/backend.webp'
import design from '../../images/design.webp'


const Services = () => {
    return (
        <div className='p-10 text-cemter bg-base-200'>
            <div className='text-center'>

                <h2 className='text-3xl mx-auto font-bold'>MY SERVICES</h2>
                <p className='text-lg my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora magni mollitia atque,
                    <br />
                    numquam quod consectetur veniam odio! Quas</p>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mx-auto justify-items-center'>

                <div class="card w-96 lg:max-w-xs  bg-base-100 shadow-xl mt-10">
                    <figure class="px-7 pt-7">
                        <img src={design} class="rounded-xl h-60" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">WEB DESIGNER</h2>
                        <p>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Work With Me</button>
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
                            <button class="btn btn-primary">Work With Me</button>
                        </div>
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
                            <button class="btn btn-primary">Work With Me</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;