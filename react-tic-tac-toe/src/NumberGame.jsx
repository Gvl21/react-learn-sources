import React from 'react';
import NumberInput from './NumberInput';
import AnswerList from './AnswerList';

function NumberGame({ onSave, num }) {
  return (
    <div>
      <h2>숫자 야구게임</h2>
      <NumberInput onSave={onSave} num = {num} />
      <AnswerList/>
    </div>
  );
}

export default NumberGame;
