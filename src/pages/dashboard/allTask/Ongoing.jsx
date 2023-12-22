// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';

// const Ongoing = ({ tasks, onDragOver, onDrop }) => {
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     onDragOver(e, 'ongoing');
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const taskId = e.dataTransfer.getData('_id');
//     const droppedTask = tasks.find((task) => task._id === taskId);

//     if (droppedTask) {
//       // Remove the dropped task from the current tasks list
//       const updatedTasks = tasks.filter((task) => task._id !== taskId);

//       // Trigger the onDrop function to update tasks in the parent component
//       onDrop('ongoing', droppedTask);
//     }
//   };

//   return (
//     <div onDragOver={handleDragOver} onDrop={handleDrop}>
//       <div className="overflow-x-auto m-10">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th className='text-2xl font-bold text-center'>Ongoing</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task._id}>
//                 <div className="card m-10 w-64 bg-pink-200 text-black">
//                   <div className="p-4">
//                     <h2 className="card-title">{task.title}</h2>
//                     <p>{task.longdesp}</p>
//                   </div>
//                 </div>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Ongoing;