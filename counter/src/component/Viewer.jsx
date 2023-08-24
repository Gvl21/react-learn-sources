import React from 'react';

function Viewer({count}) {
  // 구조분해 할당으로 값 넘겨받기
  return (
    <div>
      <div>현재 카운트:</div>
      <h2>{count}</h2>
    </div>
  );
}

export default Viewer;
