import React, { useReducer, useState } from 'react';

// reducer 매개변수
// reducer의 첫번쨰 매개변수 state : 현재의 상태값이 저장
// 두번쨰 매개변수 action : 디스패치 함수에서 전달함 action 객체가 저장

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
          return state + action.data;
        case 'DECREASE':
          return state - action.data;
          // 새로운 상태변경 이벤트가 추가되더라도 컴포넌트 외부의 reducer에서 관리
          case 'INIT':
            return 0;
        default:
          return state;
    }
}



function TestComp() {
  // 상태 변경 코드를 컴포넌트 밖으로 reducer
  // useReducer 훅의
  // 첫번째 매개변수 reducer함수
  // 두번째 매개변수 초기값
  // 리턴 값 배열의 첫번째 값, 상태변수(state)
  // 리턴 값 배열의 두번째 값, dispatch, 상태 변경 촉발 함수
  const [count, dispatch] = useReducer(reducer, 0);

  // 컴포넌트 내부에 상태 변화 코드가 존재
  /*
  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  */

  return (
    <div>
      <h3>리듀서 사용하기</h3>
      <h3>{count}</h3>
      {/* 이벤트를 호출했을 때 디스패치 함수가 호출이되고, 객체가 전달이 된다. 전달되는 객체를 action 이라고 한다. 객체의 프로퍼티에는 type, data가 있다. 디스패치 함수가 호출되면 리듀서 함수가 호출된다. */}
      <button onClick={() => dispatch({ type: 'INCREASE', data: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREASE', data: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'INIT'})}>초기화</button>
    </div>
  );
}

export default TestComp;
