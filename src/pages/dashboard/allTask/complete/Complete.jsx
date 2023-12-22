// // Complete.js
// import React, { useState } from 'react';

// const Complete = ({ onDragOver, onDrop,tasks }) => {
  
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     onDragOver(e, 'complete');
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const taskId = e.dataTransfer.getData('_id');
//     onDrop('complete', taskId);
//   };

//   return (
//     <div onDragOver={handleDragOver} onDrop={handleDrop}>
//       <div className="overflow-x-auto m-10">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th className='text-2xl font-bold text-center'>Complete</th>
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

// export default Complete;
