import React, { useState } from 'react';

// 상위 컴포넌트에서 props로 전달받은 number
function Viewer({ number }) {
  console.log('viewer');
  const eo = number % 2 === 0 ? '짝수' : '홀수';

  // 조건부 렌더링 (삼항연산자 활용)
  // 숫자가 홀수면 홀수, 짝수면 짝수
  return (
    <div>
      <h3>{eo}</h3>
    </div>
  );
}

function StatesProps() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      {/* 자식 컴포넌트로 Viewer를 갖고, Props로 상태값 number를 전달합니다. */}
      <button onClick={onIncrease}>+</button>
      <span> </span>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default StatesProps;
