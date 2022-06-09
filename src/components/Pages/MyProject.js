import React from 'react';
import project1 from '../../images/menufacture.png'
import project2 from '../../images/warehouse.png'
import project3 from '../../images/dantal care.png'



const MyProject = () => {
    return (
        <div className='p-5 grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={project1} alt="" />
            </div>
            <div>
                <img src={project2} alt="" />
            </div>
            <div>
                <img src={project3} alt="" />
            </div>

        </div >

    );
};

export default MyProject;