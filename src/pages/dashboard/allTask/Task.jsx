/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import Swal from 'sweetalert2';



    const Task = ({ task, tasks, setTasks }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
          type: "task",
          item: { id: task._id },
          collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
          }),
        }));
      
        
console.log(isDragging)
    const deleteTask= (_id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`server-site-task-management-platform.vercel.app/addtask/${_id}`, {
              method: 'DELETE',
            })
              .then(response => response.json())
              .then(data => {
                console.log('Pet deleted successfully:', data);
                setTasks(prevPets => prevPets.filter(pet => pet._id !== _id));
              })
              .catch(error => console.error('Error deleting pet:', error));
          }
        });
      };


   return (
         
         
              <div ref={drag} className={`relative card mt-2 w-64 bg-pink-200 text-black ${isDragging} ? "opacity-25" : "opacity-100"`}>
                <div className="px-4 py-10">
                    
                  <div className='flex justify-between items-center'>
                    <h2 className="card-title">{task.title}</h2>
                    <div className="badge">{task.priority}</div>
                  </div>
                  <p>{task.longdesp}</p>
                  <p>Deadline: {task.date}</p>
                  <div className='flex gap-3'>
                  <button className='btn btn-xs cursor-pointer' onClick={() =>deleteTask(task._id)}>Remove</button>
                  <button className='btn btn-xs cursor-pointer'>Edit</button>
                  </div>
                </div>
              </div>
           
       
    );
};

export default Task;