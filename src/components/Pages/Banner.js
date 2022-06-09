import React from 'react';

const Banner = () => {
    return (
        <div className='p-10 '>

            <div class=" bg-green-800/[.7] rounded-2xl p-10">
                <div class="grid sm:grid-cols-1 lg:grid-cols-2 justify-center my-auto">

                    <div className=''>
                        <h1 class="text-5xl mt-5 font-bold">Hey I am Asaduzzaman</h1>
                        <p class="py-6 text-xl">I AM A JUNIOR FRONT-END WEB DEVELOPER</p>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <button class="btn mr-3 btn-accent">HIRE ME</button>
                            <button class="btn btn-primary">GET RESUME</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;