import React from 'react';

const Banefit = () => {
    return (
       <div className='bg-base-200 mt-20'>
        <div><h1 className='text-4xl text-center   pt-20 '>Who Benefits?</h1></div>
         <div className='py-20 grid grid-cols-1 md:grid-cols-2  mx-auto w-full lg:w-5/12 '>
            <div className=' w-72  rounded-md h-56 p-5 mx-auto bg-white ' style={{ border: '2px solid purple', backgroundColor: 'transparent' }}>
<h1 className='text-2xl'>Developers</h1>
<p>Our task management platform streamlines project organization and task tracking, enhancing developers' efficiency and collaboration.</p>
            </div>
            <div className=' w-72 mt-5 md:mt-0 rounded-md h-56 p-5 mx-auto bg-white '>
<h1 className='text-2xl'>Students</h1>
<p>Geared towards student life, our platform facilitates assignment management and scheduling, helping students stay organized and on top of academic responsibilities.</p>
            </div>
            <div className=' w-72 md:mt-10 mt-5 rounded-md h-56 p-5 mx-auto bg-white ' >
<h1 className='text-2xl'>Corporate Professionals</h1>
<p>Tailored for corporate workflows, our platform fosters seamless task delegation, progress monitoring, and communication, optimizing overall productivity.</p>
            </div>
            <div className='md:mt-10 mt-5 w-72 rounded-md h-56 p-5 mx-auto bg-purple-600 text-white '>
<h1 className='text-2xl'>Bankers</h1>
<p>Ideal for financial professionals, our platform ensures organized task prioritization, enabling bankers to manage deadlines and complex financial projects effectively.</p>
            </div>
        </div>
       </div>
    );
};

export default Banefit;