import React from 'react';




const About = () => {
    return (
        <div className='bg-gray-700 py-10' style={{ background: "#13152e" }}>
            <div className='text-red-600'>
                <h2 className='text-2xl font-bold text-center text-red-600 underline underline-offset-8'>About Me</h2>
            </div>

            <div className='my-8 px-10 py-6 mx-auto w-8/12'>

                <div className='text-white'>
                    <h2 className='text-xl text-center my-2 font-semibold '>ABOUT ME AND MY SKILLS</h2>
                    <p>I'm a React JS developer. I always want to make a website good-looking. Always looking for new technology. I have a lot of interest in UI. That's why I learned to react to js to make a user satisfied.
                        I started learning to react a few months ago and I love using react on website because React is to be fast, scalable, and simple. It works only on user interfaces in the application.</p>


                    <a href="_" class="mt-4 px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-200 text-black inline-block justify-center">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-[#e15c76] group-hover:h-full opacity-90"></span>
                        <span class=" relative group-hover:text-white"> ABOUT MORE</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;