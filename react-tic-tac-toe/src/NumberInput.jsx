import React, { useState } from 'react';
import AnswerList from './AnswerList';

function NumberInput({ onSave, num }) {
  const [input, setInput] = useState();

  function onChangeHandler(e) {
    if (e.target.value > 9999) {
      return;
    }
    setInput(e.target.value);
  }
  function onClickHandler() {
    onSave(input);
  }

  return (
    <div>
      <h2>숫자 야구게임</h2>
      <input
        type='text'
        placeholder='4개의 숫자 입력'
        onChange={onChangeHandler}
        value={input}
      />
      <button onClick={onClickHandler}>제출</button>
      
    </div>
  );
}

export default NumberInput;
