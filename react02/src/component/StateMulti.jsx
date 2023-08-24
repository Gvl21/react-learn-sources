import React, { useState } from 'react';

function StateMulti() {
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    text: '',
  });

  const onChangeHandler = (event) => {
    console.log('현재 타겟 : ', event.target.name);
    console.log('수정할 값 : ', event.target.value);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  /* 상태관리를 각각으로 할 경우
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [text, setText] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeGender = (event) => {
    setGender(event.target.value);
  };
  const onChangeBirth = (event) => {
    setBirth(event.target.value);
  };
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  */
  return (
    <div>
      <input
        type='text'
        name='name'
        value={state.name}
        placeholder='이름을 입력하세요'
        onChange={onChangeHandler}
      />
      <div>
        <select name='gender' value={state.gender} onChange={onChangeHandler}>
          <option key=''></option>
          <option key='남성'>남성</option>
          <option key='여성'>여성</option>
        </select>
      </div>
      <input
        type='date'
        name='birth'
        value={state.birth}
        onChange={onChangeHandler}
      />
      <textarea
        name='text'
        value={state.text}
        cols='30'
        rows='10'
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
}

export default StateMulti;
