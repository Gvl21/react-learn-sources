import './body.css'

export const Body = () => {
  const numA = true;
  const numB = false;
  const num = 31;
  const obj1 = { a: '객체는 내부로 접근해야함.', b: 2 };
  //  객체는 JSX 표현식 {} 사용이 불가
  //  fragment Tag로 최상위를 감싸서 사용
  return (
    <div className ="body" style ={{backgroundColor : 'gray',border:'5px solid black'}}>
      <h1>Body</h1>
      <h2>내용 본문</h2>
      <h3>{numA + numB}</h3>
      <h1>{String(numA || numB)}</h1>
      <h1> {obj1.a} </h1>
      <h1>
        {num}은 {num % 2 === 0 ? '짝수' : '홀수'}입니다.
      </h1>
    </div>
  );
};

export default Body;

