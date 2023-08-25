import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

// 데이터 모델링하기
const item = {
  id: 0, // 식별자
  isDone: false, // bool 완료여부
  content: '할 일', // string 할 일
  createdDate: new Date().getTime(), // timestamp 생성시간
};
// 임시 데이터 만들기 Mock
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '할 일',
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '할 일',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '할 일',
    createdDate: new Date().getTime(),
  },
];
// [
//   {},
//   {},
//   {},
//   ...
// ]

// 데이터 관리
function App() {
  // 데이터 설정하기
  const [todo, setTodo] = useState(mockTodo);

  // ref 훅으로 id 변수를 초기화
  const idRef = useRef(3);
  // 추가(생성) 함수 매개변수로 할 일을 입력받아, todo(할일배열)에 추가
  const onCreate = (content) => {
    const item = {
      id: idRef.current, // 식별자, id 레퍼런스로 받음
      isDone: false, // bool 완료여부
      content: content, // string 할 일
      createdDate: new Date().getTime(), // timestamp 생성시간
    };
    // 전개연산자로 기존 목록을 펼치고, 새 아이템을 가장 처음에 삽입하여 todo를 Update
    setTodo([item, ...todo]);
    idRef.current += 1; // 식별자 번호를 변경
  };

  return (
    <div className='App'>
      <Header />
      {/* props로 생성함수 전달 */}
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  );
}

export default App;
