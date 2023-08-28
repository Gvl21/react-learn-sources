import React from 'react';
import './TodoItem.css';

// 할 일 아이템을 삭제
function TodoItem(props) {
  // 전달받은 데이터를 각각의 JSX 위치에 삽입하여 렌더링
  const { id, content, isDone, createdDate, onUpdate, onDelete } = props;
  return (
    <div className='TodoItem'>
      <input
        type='checkbox'
        onChange={() => {
          onUpdate(id);
        }}
        className='checkbox'
        checked={isDone}
      />
      <div className='title'>{content}</div>
      <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
      <button
        className='btn'
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
