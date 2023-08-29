import React, { useState } from 'react';
import NumberGame from './NumberGame';
import NumberInput from './NumberInput';
import AnswerList from './AnswerList';
// 야구게임

function App() {
  function checkMatch(answerArray, inputArray) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i++) {
      if (answerArray[i] === inputArray[i]) {
        strike += 1;
      } else if (answerArray.includes(inputArray[i])) {
        ball += 1;
      }
    }
    return `${strike} 스트라이크, ${ball} 볼입니다.`;
  }

  function getAnswer() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answerArray = [];
    for (let i = 0; i < 4; i++) {
      const number = numbers[Math.floor(Math.random * numbers.length)];
      answerArray.push(number);
    }
    return answerArray;
  }

  const [answer, setAnswer] = useState(getAnswer());
  const [num, setNum] = useState([]);

  function onSave(inputNum) {
    setNum([...num, inputNum]);
  }

  return (
    <div>
      <NumberInput onSave={onSave} num={num} />
      <AnswerList checkMatch={checkMatch} answer={answer} num={num} />
    </div>
  );
}

export default App;
