/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import AllTask from '../AllTask';
import Section from '../Section';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

  const Todo = () => {
    const [tasks, setTasks] = useState([]);
    console.log('todo',tasks);
    useEffect(() => {
      fetch(`server-site-task-management-platform.vercel.app/addtask`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Received data from server:', data);
          setTasks(data);
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    }, []);



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
      <DndProvider backend={HTML5Backend}>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-10 w-10/12  mx-auto lg:w-full lg:tasgap-6'>
           {statuses.map((status,index)=><Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed}></Section>)}
        </div>
        </DndProvider>
    );
};



  
  // return (
  //   <div>
      
  //     {ttasks.length > 0 ? (
  //       ttasks.map((tasks) => (
  //         <AllTask key={tasks._id} tasks={tasks} setTasks={setTasks} />
  //       ))
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
  // };
 
  export default Todo;
