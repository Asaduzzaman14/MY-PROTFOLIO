import React from 'react';
import contuctus from '../../images/contuctUs.png'

const Contuctme = () => {
    return (
        <div className=''>
            <div class=" bg-[#13152e] ">

                <h2 className='text-2xl text-center text-red-600 py-5'>Contact Me</h2>
                <div class="py-5 grid grid-cols-1 lg:grid-cols-2">

                    <img className='mx-auto' src={contuctus} alt="" />

                    <div class=" flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto rounded">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <textarea name="" id="" cols="10" rows="10" placeholder='Email Body' className='border p-3 rounded max-h-32'></textarea>

                            <div class="form-control mt-6">
                                <a href={''} class=" text-center px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                                    <span class=" relative group-hover:text-white ">Send</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Contuctme;