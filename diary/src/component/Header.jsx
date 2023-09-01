import React from 'react';
import './Header.css';
function Header({ title, left, right }) {
  return (
    <div className='Header'>
      <div className='header_left'> {left} </div>
      <div className='header_title'> {title} </div>
      <div className='header_right'> {right} </div>
    </div>
  );
}

export default Header;
