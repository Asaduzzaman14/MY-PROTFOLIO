import React from 'react';
import contuctus from '../../images/contuctUs.png'

const Contuctme = () => {
    return (
        <div class="hero bg-base-content/[.8] mt-5">

            <div class="hero-content flex-col lg:flex-row-reverse">

                <img src={contuctus} alt="" />

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <textarea name="" id="" cols="10" rows="10" placeholder='Email Body' className='border p-3 rounded'></textarea>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contuctme;