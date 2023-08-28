import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

// 할 일 목록을 렌더링 (검색 결과)
function TodoList({ todo, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  {
    /* [ { id, content, date, isDone }, {}, {} ... ] */
  }
  const getSearchResult = () => {
    // 할 일 목록에서 단어를 포함하는 새로운 배열을 반환하는 함수
    return search === ''
      ? todo
      : todo.filter((item) => item.content.includes(search));
  };

  return (
    <div className='TodoList'>
      <h4>할 일 목록</h4>
      <input
        value={search}
        onChange={onChangeHandler}
        className='searchbar'
        placeholder='검색어를 입력하세요'
      />
      <div className='list_wrapper'>
        {/* [ { id, content, date, isDone }, {}, {} ... ] 검색어로 필터링된 배열 */}
        {getSearchResult().map((item) => (
          // 스프레드 연산자로 key, value가 각각 props로 펼쳐져 하위 컴포넌트에 전달
          // 리액트에서 배열로 컴포넌트를 구분할 필요가 있을 때 반드시 key라는 속성(prop)을 줘야한다.
          // key는 반드시 고유한 속성을 가져야 한다.
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
          // Props Drilling : 위에서부터 전달 받은 props가 땅을 파고 들어가듯이 컴포넌트에서 전달 되는 것
        ))}
      </div>
    </div>
  );
}

export default TodoList;
