import React from 'react';

const Todo = ({ text }) => {
  return (
    <div className='todo'>
      <li className='todo-item'>{text}</li>
      <button className='complete-btn'>complete</button>
      <button className='trash-btn'>Delete</button>
    </div>
  );
};

export default Todo;
