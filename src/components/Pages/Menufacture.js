import React from 'react';
import tools1 from '../../images/tools-app-2.png'
import tools2 from '../../images/tools-app-3.png'

const Menufacture = () => {
    return (
        <div className='bg-gray-100 py-10 text-center '>
            <h2 className='text-xl text-center underline underline-offset-4'>This is menufacture app</h2>

            <div className=' gap-5 mt-10 p-10 grid grid-cols-1 lg:grid-cols-2 place-content-end'>

                <div class=" mx-auto card card-compact  bg-base-100 shadow-xl hover:translate-x-2 ease-out duration-500">
                    <figure><img src={tools1} alt="tools-app" /></figure>
                    {/* <div class="p-3">
                        <h2 class="card-title">tools app image</h2>
                        <p>Techonology: react, java</p>

                    </div> */}
                </div>
                <div class="mx-auto card card-compact  bg-base-100 shadow-xl  hover:translate-x-2 ease-out duration-500">
                    <figure><img src={tools2} alt="tools-app" /></figure>
                    {/* <div class="p-3">
                        <h2 class="card-title">tools app image</h2>
                        <p>Techonology: react, java</p>

                    </div> */}
                </div>
                <div class="mx-auto card card-compact  bg-base-100 shadow-xl hover:translate-x-2 ease-out duration-500">
                    <figure><img src={tools2} alt="tools-app" /></figure>
                    {/* <div class="p-3">
                        <h2 class="card-title">tools app image</h2>
                        <p>Techonology: react, java</p>

                    </div> */}
                </div>


            </div>
            <div className='w-3/4 mx-auto'>
                <h3 className='text-xl text-red-600 font-semibold'>project details</h3>

                <p className=''>
                    It is a tools manufacturer website
                    ● On this website you can order any tools and pay for the stripe method.
                    ● Here have a client and an admin board to controle
                    ● For admin role here i implement JWT token for verify
                </p>
            </div>
        </div>
    );
};

export default Menufacture;