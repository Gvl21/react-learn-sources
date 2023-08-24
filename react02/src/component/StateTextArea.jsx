import React, { useState } from 'react';

function StateTextArea() {
  const [text, textState] = useState('');

  const onChangeHandler = (e) => {
    textState(e.target.value);
  };

  return (
    <div>
      <textarea onChange={onChangeHandler}>{text}</textarea>
    </div>
  );
}

export default StateTextArea;
