import  { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

import Swal from 'sweetalert2';


const AddTask = () => {
  //   const { user } = useContext(AuthContext);
  // const [image, setImage] = useState('');
  // const [url, setUrl] = useState('');
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
      
            console.log(data);
            // Remove the following lines as they are unnecessary
            // data.preventDefault();
            // const form = event.target;
        
            const newTask = {
                title: data.title,
                longdesp: data.longdesp,
                priority: data.priority,
                date: data.date,
            };
    console.log(newTask);

    fetch("server-site-task-management-platform.vercel.app/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Task Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          window.location.href = '/'; // Redirect to the home page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error as needed (e.g., show an error message to the user)
      });
    
}

//  hhhhhhhhhhhhhh


    return (
        <div className='h-screen overflow-hidden'>
            
            <div className="flex items-center justify-center p-12 w-full lg:w-10/12 mx-auto bg-base-400  rounded-xl">
           
        <div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md">
        <div>
                <h1 className='text-center py-10 text-3xl font-bold '>Add Your Task</h1>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
           
              <div htmlFor='name' className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                 Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  {...register("title",{ required:true })}
                  placeholder="Title"
                //   value={values.name}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                  min="0"
                  autoComplete="off"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                 {errors.title && <span className='text-red-500'>Title is required</span>}
                 {/* {errors.name && touched.name? (<p className=" text-error">{errors.name}</p>):null} */}
              </div>


              <div className="mb-5">
        <label htmlFor="longdesp" className="mb-3 block text-base font-medium text-[#07074D]">
          Add Long Description
        </label>
        <textarea
          name="longdesp"
          {...register("longdesp",{ required:true })}
          id="longdesp"
          placeholder="Long Description"
        //   value={values.longdesp}
        //   onChange={handleChange}
        //   onBlur={handleBlur}
          min="0"
          autoComplete="off"
          rows="4" // Specify the number of rows for the text area
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md resize-none" // Added resize-none to disable resizing
        />
          {errors.longdesp && <span className='text-red-500'>Description is required</span>}
         {/* {errors.longdesp && touched.longdesp? (<p className=" text-error">{errors.longdesp}</p>):null} */}
      </div>
             
             
              <div className='flex  justify-between'>
              <div className="mb-5">
        <label htmlFor="pet_category" className="mb-3 block text-base font-medium text-[#07074D]">
         Set Priority
        </label>
        <select defaultValue="select" {...register("priority",{ required:true })}>
        {/* <option >Select</option> */}
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </select>
      {errors.priority && <span className='text-red-500'>Priority is required</span>}
      </div>


      <div className="mb-5">
              <label htmlFor="deadline" className="mb-3 block text-base font-medium text-[#07074D]">
               Set Deadline 
              </label>
              <Controller
                name="deadline"
                control={control}
                defaultValue="" // Set a default value if needed
                render={({ field }) => (
                  <input
                    type="date"
                    {...register("date",{ required:true })}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  
                )}
              />
              {errors.date && <span className='text-red-500'>Deadline is required</span>}
            </div>
              </div>
             
         
              <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md hover:bg-purple-400 py-3 px-8 text-center text-base font-semibold text-white outline-none w-full bg-purple-400"
              >
                Add Task
              </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
};

export default AddTask;