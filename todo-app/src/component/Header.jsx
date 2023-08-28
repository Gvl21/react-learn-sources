import React from 'react';
import './Header.css';

// 오늘 날짜 표시
function Header() {
  return (
    <div className='Header'>
      <h3>오늘 날짜는</h3>
      <h2>{new Date().toLocaleDateString()}</h2>
    </div>
  );
}

export default Header;
