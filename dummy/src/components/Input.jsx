import React, { useState } from 'react';

function Input({ num, setNum, matching }) {
  const onChangeHandler = (e) => {
    setNum(e.target.value);
  };

  return (
    <form>
      <input
        type='text'
        onChange={onChangeHandler}
        placeholder='4숫자'
        maxLength={4}
        minLength={4}
        value={num}
      />
      <button onClick={matching}>제출</button>
    </form>
  );
}

export default Input;
