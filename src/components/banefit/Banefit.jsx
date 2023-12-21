import React from 'react';

const Banefit = () => {
    return (
       <div className='bg-base-200 mt-20'>
        <div><h1 className='text-4xl text-center   pt-20 '>Who Benefits?</h1></div>
         <div className='py-20 grid grid-cols-1 md:grid-cols-2  mx-auto w-full lg:w-5/12 '>
            <div className=' w-72  rounded-md h-56 p-5 mx-auto bg-white ' style={{ border: '2px solid purple', backgroundColor: 'transparent' }}>
<h1 className='text-2xl'>Developers</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus, ab exercitationem omnis amet quasi beatae repellendus. Blanditiis, ab deleniti.</p>
            </div>
            <div className=' w-72 mt-5 md:mt-0 rounded-md h-56 p-5 mx-auto bg-white '>
<h1 className='text-2xl'>Developers</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus, ab exercitationem omnis amet quasi beatae repellendus. Blanditiis, ab deleniti.</p>
            </div>
            <div className=' w-72 md:mt-10 mt-5 rounded-md h-56 p-5 mx-auto bg-white ' >
<h1 className='text-2xl'>Developers</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus, ab exercitationem omnis amet quasi beatae repellendus. Blanditiis, ab deleniti.</p>
            </div>
            <div className='md:mt-10 mt-5 w-72 rounded-md h-56 p-5 mx-auto bg-purple-600 text-white '>
<h1 className='text-2xl'>Developers</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus, ab exercitationem omnis amet quasi beatae repellendus. Blanditiis, ab deleniti.</p>
            </div>
        </div>
       </div>
    );
};

export default Banefit;