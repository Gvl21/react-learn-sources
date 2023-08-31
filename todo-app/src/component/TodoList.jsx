import { useContext, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { TodoContext } from '../App';

// 할 일 목록을 렌더링 (검색 결과)
function TodoList() {
  const { todo } = useContext(TodoContext);
  
 
  // 분석 ( 전체 할일 갯수, 한일 , 하지 않은 일 )
  // useMemo 훅 매개변수 (콜백함수, 의존성 배열)
  // 리턴 값 : 콜백함수의 리턴 값
  // 의존성 배열에 있는 상태값이 변경되는 경우에만, 첫번쨰 파라미터의 콜백함수를 실행한다.
  const analyzeTodo = useMemo(() => {
    console.log('분석 함수 호출');
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const dontCount = totalCount - doneCount;
    return { totalCount, doneCount, dontCount };
  }, [todo]);
  // useMemo를 사용할 경우 analyzeTodo는 더 이상 함수가 아니라
  // 객체를 가지고 있는 변수가 된다. 호출은 지워준다.
  const { totalCount, doneCount, dontCount } = analyzeTodo;

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
      {/* 분석 */}
      <div>
        <div>총 할 일 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>미완료 할 일: {dontCount}</div>
      </div>

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
            // onUpdate={onUpdate}
            // onDelete={onDelete}
          />
          // Props Drilling : 위에서부터 전달 받은 props가 땅을 파고 들어가듯이 컴포넌트에서 전달 되는 것
          // Props Drilling을 제거하기 위한 방법으로 Context API 가 사용된다 Context가 Props를 대체한다.
        ))}
      </div>
    </div>
  );
}

export default TodoList;
