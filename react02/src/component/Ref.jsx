import React, { useRef, useState } from 'react';

function Ref() {
  const [text, setText] = useState('');
  const textRef = useRef();
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const onClickHandler = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText('');
    }
  };

  // 리액트에서 useRef 훅을 사용하게 될 경우
  // 참조값을 가져올 수 있다.
  // 태그에서 ref 속성을 주게될 경우, 해당 DOM요소에 직접 접근이 가능하다.
  return (
    <div>
      <input
        ref={textRef}
        value={text}
        onChange={onChangeHandler}
        placeholder='5글자 이상을 입력하시요'
      />
      <button onClick={onClickHandler}>완료</button>
    </div>
  );
}

export default Ref;
