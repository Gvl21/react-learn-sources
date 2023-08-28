import { useReducer, useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp';

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
    content: '할 일 생성하기',
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '할 일 조회하기',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '할 일 수정하기',
    createdDate: new Date().getTime(),
  },
];
// [
//   {},
//   {},
//   {},
//   ...
// ]

// reducer 함수는 상태와 액션(객체)를 매개변수로 받아, 상태를 반환한다
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [action.item, ...state];
    }
    case 'UPDATE': {
      return state.map((item) =>
        item.id === action.id ? { ...item, isDone: !item.isDone } : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
}

// 데이터 관리
function App() {
  // 데이터 설정하기 =>  useReducer로 변경
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  // ref 훅으로 id 변수를 초기화


  
  const idRef = useRef(3);

  // 추가(생성) 함수 매개변수로 할 일을 입력받아, todo(할일배열)에 추가
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      item: {
        id: idRef.current, // 식별자, id 레퍼런스로 받음
        isDone: false, // bool 완료여부
        content, // content : content 변수명 : 변수값
        createdDate: new Date().getTime(), // timestamp 생성시간
      },
    });

    // 전개연산자로 기존 목록을 펼치고, 새 아이템을 가장 처음에 삽입하여 todo를 Update
    // setTodo([item, ...todo]);
    idRef.current += 1; // 식별자 번호를 변경
  };

  // 수정(Update) 함수 => props로 전달
  const onUpdate = (id) => {
    dispatch({
      type: 'UPDATE',
      id,
    });
  };
  // todo : [ { id, content, isDone, date }, { ... }, {} ... ]
  // setTodo(
  //   todo.map(
  //     (item) =>
  //       // 해당 아이템일 경우, isDone을 논리연산자(Not)으로 불리언 값을 변경
  //       // 스프레드 연산자로 변경
  //       item.id === id ? { ...item, isDone: !item.isDone } : item
  //     /*
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         isDone: !item.isDone,
  //       };
  //     } else {
  //       return item;
  //     }
  // */
  //       )
  //     );
  //   };

  // 삭제(Delete) 함수
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };
  //     // 배열에서 아이템 삭제하기, 상태변경함수, filter 함수
  //     // 삭제 버튼을 클릭한 아이템의 id의 아이템만 배열에서 걸러낸 새 배열
  //     setTodo(todo.filter((item) => item.id !== id));
  //   };

  return (
    <div className='App'>
      <TestComp />

      <Header />
      {/* props로 생성함수 전달 */}
      <TodoEditor onCreate={onCreate} />
      {/* todo props로 할일 목록 전달 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
