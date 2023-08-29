import React, { useState } from 'react';
import Try from './Try';
import Input from './Input';

function getAnswer() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answerArray = [];
  /* 랜덤한 숫자 4개가 들어있는 배열을 반환하는 함수를 만들어주세요. [7,2,4,1] */
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * 9);
    const randomNumber = numbers[randomIndex];

    answerArray.push(randomNumber);
    // 중복 제거하기
    // 1. splice 활용하는 방법 (원본에서 해당 인덱스에서 길이만큼 제거)
    numbers.splice(randomIndex, 1);
    // 2. indexOf 활용하는 방법 (갯수가 줄어들 수 있다.)
    // if (answerArray.indexOf(number) === -1) {
    //   answerArray.push(number);
    // }
  }
  return answerArray;
}

function checkMatch(answerArray, inputArray) {
  /* 정답배열과, 입력배열을 비교해서 스트라이크, 볼을 계산 */
  let strike = 0;
  let ball = 0;
  /* 스트라이크는 숫자위치까지 + 1, 볼은 숫자가 포함되면 +1 */
  for (let i = 0; i < 4; i++) {
    if (answerArray[i] === inputArray[i]) {
      strike += 1;
    } else if (answerArray.includes(inputArray[i])) {
      ball += 1;
    }
  }
  return `${strike} 스트라이크, ${ball} 볼입니다.`;
}

function NumberGame() {
  const [answer, setAnswer] = useState(getAnswer());
  const [tries, setTries] = useState([]);
  const [value, setValue] = useState('');

  function handleChange(event) {
    const inputValue = event.target.value;
    const numberValue = inputValue.replace(/\D/g, '');
    setValue(numberValue);
  }

  function handleSubmit(event) {
    // form 태그 기본값을 막는다. (새로고침)
    event.preventDefault();

    /* 시도한 내용을 저장하는 객체 배열을 만들어서 입력할 때마다 추가해주세요 [ { try: [1,2,3,4], result : "1스트라이크 1볼입니다."}, { try: [...] result : '...' } ... ] */
    const inputArray = value.split('').map(Number);
    // 스트라이크 볼 계산 함수 => 결과문

    console.log(value);
    console.log(answer);
    console.log(value == answer.join(''));
    // 성공했을 때
    if (value === answer.join('')) {
      alert('홈런! 축하합니다.');
      // 초기화
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getAnswer());
      setTries([]);
      // 실패했을 때
    } else if (tries.length > 10) {
      alert(`시도회수를 넘겼습니다. 정답은 ${answer}입니다.`);
      // 초기화
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getAnswer());
      setTries([]);
    }

    const resultText = checkMatch(answer, inputArray);
    // 각각의 시도 배열을 업데이트 [ {}, {} ... ]
    setTries((tries) => [...tries, { try: inputArray, result: resultText }]);
    console.log(answer);

    /*  input 태그와 button 태그로 상태를 저장하는 리액트 앱을 만들어주세요. */
    /* 입력받은 값을 value를 '4321' 문자열 => 숫자 배열 [4,3,2,1]로 변환 */
  }

  const mockData = [
    { try: [1, 2, 3, 4], result: '1스트라이크 1볼입니다.' },
    { try: [3, 4, 5, 7], result: '2스트라이크 1볼입니다.' },
    { try: [3, 4, 5, 7], result: '2스트라이크 1볼입니다.' },
    { try: [3, 4, 5, 7], result: '2스트라이크 1볼입니다.' },
  ];

  return (
    <div>
      <h1>숫자야구 게임</h1>
      <Input
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
      <ul>
        {/* 시도할 때마다 li태그로 렌더링을 추가해주세요. */}
        {tries.map((obj, i) => (
          <Try obj={obj} i={i} />
        ))}
      </ul>
    </div>
  );
}

export default NumberGame;
