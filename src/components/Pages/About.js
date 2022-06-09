import React from 'react';

const About = () => {
    return (
        <div className='my-8 bg-black/[.2] px-20 py-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center'>

            <div className='text-white'>
                <h2 className='text-lg font-bold'>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut porro velit ipsam sit. Repellat distinctio iure dolore veritatis rerum?</p>
                <button className='my-4 btn btn-secondary'>SEE DETAIL</button>
            </div>

            <div>
                <img className='w-60 rounded-lg' src="https://t3.ftcdn.net/jpg/02/92/67/14/240_F_292671442_rAmzDn1o4Muvjn5jr7KyhDaS2nqIdjNK.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;