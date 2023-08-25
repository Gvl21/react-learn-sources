import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

// 할 일 목록 렌더링 (검색 결과)
function TodoList() {
  return (
    <div className='TodoList'>
      <h4>할 일 목록</h4>
      <input
        type='text'
        className='searchbar'
        placeholder='검색어를 입력하시오.'
      />
      <div className='list_wrapper'>
        <TodoItem/>    
        <TodoItem/>    
        <TodoItem/>    
      </div>
    </div>
  );
}

export default TodoList;
