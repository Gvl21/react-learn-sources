import { useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  // 상태 값, 상태 설정 함수 = 리액트 훅(useState)
  const [count, setCount] = useState(0);
  // 이벤트핸들러 (매개변수) : 상태 설정 함수
  const setCountHandler = (val) => {
    setCount(count +  val );
  };

  return (
    <div className='App'>
      <h1>카운터</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller setCountHandler={setCountHandler} />
      </section>
    </div>
  );
}

export default App;
