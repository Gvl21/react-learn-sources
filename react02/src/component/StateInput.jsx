import { useState } from 'react';

export default function StateInput() {
  const arr = useState('');
  // text =
  const text = arr[0];
  // setText = 상태를 변경시키는 함수
  const setText = arr[1];
  // const [text, setText] = useState('');
  console.log(text);
  // input태그가 변할떄마다 호출되는 핸들러
  function handleOnChange(e) {
    // 정규식을 활영히야 입력제한을 둘 수 있다.
    // /[^0-9]/g 숫자가 아닌 경우

    const temp = e.target.value.replace(/[^0-9]/g, '');
    // 상태변경함수를 호출
    setText(temp);
    // 1. 상태(text)변수의 값을 변경
    // 2. 변경된 값으로 리렌더링 한다
  }

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={handleOnChange}
        placeholder='숫자만 입력해주세요'
      />
      <p>{text}</p>
    </div>
  );
}
