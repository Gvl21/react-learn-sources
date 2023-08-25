import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <h3>오늘 날짜는</h3>
      <h2>{new Date().toLocaleDateString()}</h2>
    </div>
  );
}

export default Header;
