import React from 'react';
import contuctus from '../../images/contuctUs.png';
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contuctme = () => {



    const ContactUs = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y2w3p1o', 'template_zjbcsph', e.target, 'FleOloje7vn4aV_F9')
            .then((result) => {
                toast('Email successfully send')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                toast("Email can't send")

            });
        e.target.reset()
    }





    return (
        <div className=''>
            <div class=" bg-[#13152e] ">

                <h2 className='text-2xl text-center text-red-600 py-5'>Contact Me</h2>
                <div class="py-5 grid grid-cols-1 lg:grid-cols-2">

                    <img className='mx-auto' src={contuctus} alt="" />

                    <div class=" flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto rounded">
                        <form onSubmit={ContactUs} class="card-body">

                            <div class="form-control">
                                <input name='name' type="text" placeholder="Your name" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input name='email' type="email" placeholder="Email" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <input name='subject' type="text" placeholder="subject" class="input input-bordered" />
                            </div>

                            <textarea name="message" id="" cols="10" rows="10" placeholder='Email Body' className='border p-3 rounded max-h-32'></textarea>

                            <div class=" mt-6">
                                <button type={'submit'} class=" text-center px-4 py-2 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                                    <span class="absolute top-0 left-0 flex w-full h-0 transition-all duration-500 ease-in-out transform translate-y bg-secondary group-hover:h-full opacity-90"></span>
                                    <span class=" relative group-hover:text-white ">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div >
        </div>
    );
};

export default Contuctme;