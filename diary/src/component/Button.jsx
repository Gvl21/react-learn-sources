import React from 'react';
import './Button.css';

function Button({ text, onClick, type }) {
    
  return (
    <button
      className={['Button', `Button_${type}`].join(' ')}
      onClick={onClick}>
      
      {text}
    </button>
  );
}

export default React.memo(Button);
