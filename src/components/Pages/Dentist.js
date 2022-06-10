import React from 'react';

import dantalImg1 from '../../images/dantal care.png'
import dantalImg2 from '../../images/dantal-2.png'
import dantalImg3 from '../../images/dantal-3.png'


const Dentist = () => {
    return (
        <div className='bg-gray-100 py-10 text-center '>
            <h2 className='text-xl text-center underline underline-offset-4'>This is Fruites app</h2>

            <div className=' gap-5 mt-10 p-10 grid grid-cols-1 lg:grid-cols-2 place-content-end'>

                <div class=" mx-auto card card-compact  bg-base-100 shadow-xl hover:translate-x-2 ease-out duration-500">
                    <figure><img className='h-60' src={dantalImg1} alt="tools-app" /></figure>

                </div>
                <div class="mx-auto card card-compact  bg-base-100 shadow-xl  hover:translate-x-2 ease-out duration-500">
                    <figure><img className='h-60' src={dantalImg2} alt="tools-app" /></figure>

                </div>
                <div class="mx-auto card card-compact  bg-base-100 shadow-xl hover:translate-x-2 ease-out duration-500">
                    <figure><img className='h-60' src={dantalImg3} alt="tools-app" /></figure>

                </div>


            </div>
            <div className='w-3/4 mx-auto'>
                <h3 className='text-xl text-red-600 font-semibold'>project details</h3>

                <p className='text-gray-700'>
                    This is an independent service (dentist) provider website,
                    Here you can take a dental service website,
                    Also implement firebase authentication,
                </p>
                <div>
                    <h2 className='text-xl font-semibold mt-4 mb-2'>Project Technology</h2>
                    <p className='text-gray-700'>
                        HTML5, CSS3, Tailwind, React.js, React Hook, React Router, Firebase
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dentist;