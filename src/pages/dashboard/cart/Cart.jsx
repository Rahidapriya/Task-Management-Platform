import React from 'react';
import { RiPresentationFill } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { AiOutlineFileDone } from "react-icons/ai";
import Navbar from '../../../components/shared/navbar/Navbar';

const Cart = () => {
    return (
        <div className='bg-[#E5E7EB]'>
            {/* <Navbar></Navbar> */}
            <div className='flex flex-col lg:flex-row gap-10 mx-auto w-7/12 py-20'>
            <div className='w-64 rounded-lg font-bold h-24 flex justify-center items-center bg-red-300'>
            <LuListTodo className='text-3xl bg-white rounded-full w-10 h-10 p-2 mr-3'></LuListTodo > To-Do Task
            </div>
            <div className='w-64 rounded-lg font-bold h-24 flex justify-center items-center bg-purple-300'>
            <RiPresentationFill className='text-3xl bg-white rounded-full w-10 h-10 p-2 mr-3'></RiPresentationFill> Ongoing Task
            </div>
            <div className='w-64 rounded-lg font-bold h-24 flex justify-center items-center bg-green-300'>
               < AiOutlineFileDone className='text-3xl bg-white rounded-full w-10 h-10 p-2 mr-3'></AiOutlineFileDone> Complete Task
            </div>
        </div>
        </div>
    );
};

export default Cart;