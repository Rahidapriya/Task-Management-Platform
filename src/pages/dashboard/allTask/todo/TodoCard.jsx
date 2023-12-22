/* eslint-disable react/prop-types */
import React from 'react';

const TodoCard = ({ card }) => {
  const dragStarted = (e, id) => {
    console.log('Drag has started', id);
    e.dataTransfer.setData('_id', id);
  };

  return (
    <div draggable onDragStart={(e) => dragStarted(e, card._id)}>
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          {/* <thead>
            <tr>
              <th className='text-2xl font-bold text-center'>To-Do</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <div className="card m-10 w-64 bg-pink-200 text-black">
                <div className="p-4">
                  <div className='flex justify-between items-center'>
                    <h2 className="card-title">{card.title}</h2>
                    <div className="badge">{card.priority}</div>
                  </div>
                  <p>{card.longdesp}</p>
                  <p>Deadline: {card.date}</p>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoCard;
