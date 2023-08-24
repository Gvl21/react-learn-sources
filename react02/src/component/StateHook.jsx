import { useState } from 'react';

export default function StateHook() {
  // useState : 리액트의 훅, 사용하기 위해서는 import 해야한다.
  // 매개변수는 : 상태(state)의 초기값
  // 상태(state) , 상태를 변경시키는 함수(setter)
  const [count, setCount] = useState(0);
  // state는 불변객체 (캡슐화되어있다)
  // state의 값이 변하게 되면 : set 함수를 사용하면
  // 컴포넌트를 다시 호출하게 되고, 다시 렌더링한다. => 리렌더링
  console.log('컴퍼넌트 렌더링');
  function onIncrease() {
    setCount(count + 1);
  }
  function onDecrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>++++</button>
      <button onClick={onDecrease}>----</button>
    </div>
  );
}
