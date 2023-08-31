import React, { memo } from 'react';
import './Header.css';


// 오늘 날짜 표시
function Header() {
  console.log('헤더 리렌더링');
  return (
    <div className='Header'>
      <h3>오늘 날짜는</h3>
      <h2>{new Date().toLocaleDateString()}</h2>
    </div>
  );
}

// 강화된 컴포넌트(메모이제이션된 컴포넌트)를 반환
// export default React.memo(Header);
export default memo(Header);
