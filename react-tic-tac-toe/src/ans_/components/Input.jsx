import React from 'react';

function Input({ handleSubmit, value, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        maxLength={4}
        placeholder='1~9 숫자 4자리를 입력하세요'
      />
      <button>시도</button>
    </form>
  );
}

export default Input;
