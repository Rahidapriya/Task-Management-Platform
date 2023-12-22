import React from 'react';
import Cart from '../cart/Cart';
import AllTask from '../allTask/AllTask';
import Todo from '../allTask/todo/Todo';

const UserDashboard = () => {
    return (
        <div className='bg-[#E5E7EB]'>
            <Cart></Cart>
            
           <Todo></Todo>
           
            <div className="  divide-y-8 divider-vertical "></div>
        </div>
    );
};

export default UserDashboard;