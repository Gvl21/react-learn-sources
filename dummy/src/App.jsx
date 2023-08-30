import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

// App  : parent  문제를 내는사람
// ans
// setAns 초기화된 정답 : 보이지 않아야함

// ---------------------------------------

// UserInput : 입력창 , 등록 버튼

// List : 이력 리스트 보여주는 기능

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const answerMaker = () => {
  const answerArr = [];
  for (let i = 0; i < 4; i += 1) {
    const targetNum = number[Math.floor(Math.random() * number.length)];
    answerArr.push(targetNum);
    number.splice(targetNum, 1);
  }
  return answerArr;
};

function App() {
  const [ans, setAns] = useState([]);
  const [num, setNum] = useState('');
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setAns(answerMaker());
  }, []);

  const matching = (e) => {
    e.preventDefault();
    if (ans.join('') === num) {
      alert('정답');
    } else {
      alert('틀림');
      setArr([...arr, num]);

    }
  };

  return (
    <div className='App'>
      <h2>숫자 맞추기</h2>
      <ul>{ans && ans.map((el) => <li key={el}>{el}</li>)}</ul>
      <Input num={num} setNum={setNum} matching={matching} />
      <List arr={arr}/>
    </div>
  );
}

export default App;
