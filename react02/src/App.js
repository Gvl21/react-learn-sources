import './App.css';
import { Header } from './component/Header';
import Ref from './component/Ref';
// import { Body } from './component/Body';
// import { Footer } from './component/Footer';
// import { Props } from './component/Props';
// import PropsSpread from './component/PropSpread';
// import Parent from './component/Parent';
// import Child from './component/Child';
// import EventHandle from './component/EventHandle';
// import StateHook from './component/StateHook';
// import StateInput from './component/StateInput';
// import StateInputDate from './component/StateInputDate';
// import StateSelect from './component/StateSelect';
// import StateTextArea from './component/StateTextArea';
// import StateMulti from './component/StateMulti';
import StatesProps from './component/StatesProps';

// // 화살표 함수를 사용하여 컴포넌트 만들기
// // 함수형 컴포넌트 <-> 클래스형 컴포넌트
// const Header = () => {
//   return (
//     <header>
//       <h1>Header 리액트 첫 컴포넌트</h1>
//     </header>
//   );
// };

// // JSX문법에서는 최상단 태그는 하나만 존재해야 함
// const Body = () => {
//   const numA = true;
//   const numB = false;
//   const num = 31;
//   const obj1 = { a: '객체는 내부로 접근해야함.', b: 2 };
//   //  객체는 JSX 표현식 {} 사용이 불가
//   //  fragment Tag로 최상위를 감싸서 사용
//   return (
//     <main>
//       <h1>Body</h1>
//       <h2>내용 본문</h2>
//       <h3>{numA + numB}</h3>
//       <h1>{String(numA || numB)}</h1>
//       <h1> {obj1.a} </h1>
//       <h1>
//         {num}은 {num % 2 === 0 ? '짝수' : '홀수'}입니다.
//       </h1>
//     </main>
//   );
// };
// const Footer = () => {
//   return (
//     <footer>
//       <h1>FOOTER</h1>
//     </footer>
//   );
// };

// JSX는 반드시 닫는 태그가 있어야 한다.
function App() {
  const name = '리액트';
  const personProps = {
    name: '홍길동',
    age: 30,
    // skillList: ['react', 'javascript', 'java'],
  };
  return (
    <div className='App'>
      <Header />
      <Ref />
      <StatesProps />
      {/* <StateTextArea />
      <StateMulti />
      <EventHandle />
      <StateHook />
      <StateInput />
      <StateInputDate />
      <StateSelect />
      <Props name={name} study={'열공합시다.'} />
      <Body />
      <Parent>
        <Child />
      </Parent>
      <PropsSpread {...personProps} />
      <Footer /> */}
    </div>
  );
}

export default App;
