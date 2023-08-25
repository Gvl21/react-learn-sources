import React, { useRef, useState } from 'react';
import './TodoEditor.css';

function TodoEditor({ onCreate }) {
  const inputRef = useRef();
  const [content, setContent] = useState('');
  // 입력태그 이벤트 핸들러
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  // 버튼 태그 이벤트 핸들러
  const onSubmitHandler = () => {
    if (!content.trim()) {
      inputRef.current.focus();
      setContent('');
      return; // 이벤트를 실행하지말고 함수종료
    }
    onCreate(content);
    setContent('');
  };
  const onKeydownHandler = (e) => {
    if (e.key === 'Enter') {
      onSubmitHandler();
    }
  };

  return (
    <div className='TodoEditor'>
      <div className='editor_wrapper'>
        <input
          onKeyDown={onKeydownHandler}
          ref={inputRef}
          value={content}
          onChange={onChangeHandler}
          type='text'
          placeholder='할 일을 입력하시오'
        />
        <button onClick={onSubmitHandler}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;
