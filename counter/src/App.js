import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
  // 상태 값, 상태 설정 함수 = 리액트 훅(useState)
  const [count, setCount] = useState(0);

  const [text, setText] = useState('');

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  // 컴포넌트의 라이프사이클 Mount-Update-Unmount
  // 에 따른 sideEffect 효과를 줄 수 있는 훅 : useEffect
  // 첫번째 매개변수 : 콜백함수
  // 두번쨰 매개변수 : 배열 (의존성 배열)

  // useEffect(() => {
  //   // console.log('count가 업데이트 되었습니다.', count);
  //   console.log('업데이트 이펙트', count, text);
  //   document.title = count + '  ' + text;
  // }, [count, text]);

  // useEffect(() => {
  //   console.log('컴포넌트 업데이트');
  // });

  // 첫번째 매개변수만 값을 전달하고, 첫번쨰 매개변수(의존성 배열)을 비울 경우
  // 렌더링 될 때마다 사이드 이펙트 함수를 호출한다.

  // useRef 혹은 컴포넌트 변수로서도 활용된다.
  // 초기값 : (매개변수), 사용할 때는 ref.current
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log('컴포넌트 업데이트');
    }
  });

  // 언마운트 (소멸 시점)에서 사이드 이펙트 제어
  // 사이드 이펙트 콜백함수의 리턴값에 콜백함수로 클린업
  useEffect(() => {
    const interValId = setInterval(() => {
      console.log('째깍');
    }, 1000);
    return () => {
      console.log('클린업');
      clearInterval(interValId);
    };
  },[]);

  // 마운트 (생성 시점)에서 사이드 이펙트 제어
  // 의존성 배열을 빈 배열로 주게 될 경우, 마운트 시점에서만 콜백 실행
  // useEffect(() => {
  //   console.log('컴포넌트 마운트');
  // });

  // 이벤트핸들러 (매개변수) : 상태 설정 함수
  const setCountHandler = (val) => {
    setCount(count + val);
  };

  return (
    <div className='App'>
      <h1>카운터</h1>
      <section>
        <Viewer count={count} />
        {count % 2 ===0 && <Even />}
      </section>
      <section>
        <Controller setCountHandler={setCountHandler} />
      </section>
      <section>
        <input value={text} onChange={changeTextHandler} />
      </section>
    </div>
  );
}

export default App;
