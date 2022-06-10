import React from 'react';
import project1 from '../../images/menufacture.png'
import project2 from '../../images/warehouse.png'
import project3 from '../../images/dantal care.png'

import './Myproject.css'




const MyProject = () => {
    return (
        <div className='relative'>

            <div className=''>

                <div class='body'>
                    <h2 className='text-3xl mt-3 font-semibold text-red-600 underline underline-offset-4'>MY PROJECT</h2>
                    <section>
                        <div class="container">

                            <div class="card">
                                <div class="content">
                                    <div class="imgBx">
                                        <img className='' src={project1} alt="" />
                                    </div>
                                    <div class="contentBx">
                                        <h3>Menufacture APP</h3>
                                    </div>
                                </div>
                                <ul class="sci ">
                                    <li>
                                        <a href="">live</a>
                                    </li>
                                    <li>
                                        <a href="">Client </a>
                                    </li>
                                    <li>
                                        <a href="">Server</a>
                                    </li>

                                    <li className='detail '>
                                        <a className='' href="">Detail</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="card">
                                <div class="content">
                                    <div class="imgBx">
                                        <img src={project2} alt='' />
                                    </div>
                                    <div class="contentBx">
                                        <h3>Fruitres app</h3>
                                    </div>
                                </div>
                                <ul class="sci">
                                    <li>
                                        <a href="">live</a>
                                    </li>
                                    <li>
                                        <a href="">Client</a>
                                    </li>
                                    <li>
                                        <a href="">Server</a>
                                    </li>
                                    <li>
                                        <a href="">Detail</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="card">
                                <div class="content">
                                    <div class="imgBx">
                                        <img src={project3} alt="" />
                                    </div>
                                    <div class="contentBx">
                                        <h3>Dantal App</h3>
                                    </div>
                                </div>
                                <ul class="sci mt-1">
                                    <li>
                                        <a href="">live</a>
                                    </li>
                                    <li>
                                        <a href="">Client</a>
                                    </li>
                                    <li>
                                        <a href="">Server</a>
                                    </li>
                                    <li>
                                        <a href="">Detail</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>
            </div >
        </div>
    );
};

export default MyProject;