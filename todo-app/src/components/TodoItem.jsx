import React from 'react';
import './TodoItem.css';

// 할 일 아이템을 삭제
function TodoItem() {
  return (
    <div className='TodoItem'>
      <input type='checkbox' className='checkbox' />
      <div>To do</div>
      <div className='date'>{new Date().toLocaleDateString()}</div>
      <button className='btn'>삭제</button>
    </div>
  );
}

export default TodoItem;
