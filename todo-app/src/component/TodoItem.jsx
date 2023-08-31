import React, { useContext, useEffect } from 'react';
import './TodoItem.css';
import { TodoContext } from '../App';

// 할 일 아이템을 삭제
function TodoItem(props) {
  // 전달받은 데이터를 각각의 JSX 위치에 삽입하여 렌더링
  const { id, content, isDone, createdDate } = props;
  // Context를 통해 props Drilling 없이 필요한 곳에 바로 공급
  const { onUpdate, onDelete } = useContext(TodoContext);
  console.log(`${id} todo item update`);
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

// export default React.memo(TodoItem);
export default TodoItem;
