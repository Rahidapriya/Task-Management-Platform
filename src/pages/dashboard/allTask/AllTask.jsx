/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */





import React, { useEffect, useState } from 'react';
import Section from './Section';

const AllTask = ({tasks,setTasks}) => {
    
    
    const [todos,setTodos]=useState([])
    const[inProgress,setInprogress]=useState([]);
    const[closed,setClosed]=useState([]);
   
    useEffect(()=>{
        // if (!tasks) {
        //     // Handle the case when tasks is undefined
        //     return;
        // }
        const fTodos=tasks.filter(task=>task.status==='todo')
        const fInProgress=tasks.filter((task)=>task.status==='inprogress')
        const fClosed=tasks.filter((task)=>task.status==='closed')
   setTodos(fTodos);
   setInprogress(fInProgress);
   setClosed(fClosed);
   
   
    },[tasks]);
    const statuses=["todo","inprogress","closed"]
    return (
        <div className='flex justify-center items-center gap-6'>
           {statuses.map((status,index)=><Section key={index} status={status}></Section>)}
        </div>
    );
};

export default AllTask;

// another section


// const Section= ({status}) => {
//     return (
//         <div>
//           <h2>{status}</h2>
//         </div>
//     );
// };





















// // AllTask.js
// import React, { useState } from 'react';
// import Todo from './todo/Todo';
// import Ongoing from './Ongoing';
// import Complete from './complete/Complete';

// const AllTask = () => {
//     const [tasks, setTasks] = useState({
//       todo: [],
//       ongoing: [],
//       complete: [],
//     });
  
//     const handleDragOver = (e) => {
//       e.preventDefault();
//     };
  
//     const handleDrop = (category, droppedTask) => {
//       setTasks((prevTasks) => {
//         // Check if the category exists in the previous tasks
//         if (prevTasks[droppedTask.category]) {
//           const updatedTasks = {
//             ...prevTasks,
//             [droppedTask.category]: prevTasks[droppedTask.category].filter((t) => t._id !== droppedTask._id),
//             [category]: [...prevTasks[category], droppedTask],
//           };
//           return updatedTasks;
//         } else {
//           // Handle the case where the category does not exist
//           return prevTasks;
//         }
//       });
//     };
  
//     return (
//       <div className="flex">
//         <Todo onDragOver={handleDragOver} onDrop={(e) => handleDrop('todo', e)} />
//         <Ongoing tasks={tasks.ongoing} onDragOver={handleDragOver} onDrop={(e) => handleDrop('ongoing', e)} />
//         <Complete tasks={tasks.complete} onDragOver={handleDragOver} onDrop={(e) => handleDrop('complete', e)} />
//       </div>
//     );
//   };
  
//   export default AllTask;