/* eslint-disable no-unused-vars */

import { useDrop } from "react-dnd";
import Header from "./Header";
import Task from "./Task";

/* eslint-disable react/prop-types */
const Section = ({ status, setTasks, tasks, todos, inProgress, closed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item, monitor) => {
      if (monitor) {
        addItemToSection(item.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  let text="Todo";
   let bg="bg-slate-500";
   let tasksToMap =tasks;

   if(status ==='inprogress'){
    text=" In Progress"
    bg="bg-purple-500"
    tasksToMap=inProgress
   }
   if(status ==='closed'){
    text=" Closed"
    bg="bg-green-500"
    tasksToMap=closed;
   }
   
  
    const addItemToSection = (id) => {
      setTasks((prev) => {
        const mTasks = prev.map((t) => {
          if (t.id === id) {
            return { ...t, status: status };
          }
          return t;
        });
        localStorage.setItem("tasks", JSON.stringify(mTasks));
        return mTasks;
      });
    };
  return (
    <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : ""}`}>
          <Header text={text} bg={bg} count={tasksToMap.length}/>list
        {tasksToMap.length>0 && tasksToMap.map(task=><Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}></Task>)}
        </div>
    );
};

export default Section;