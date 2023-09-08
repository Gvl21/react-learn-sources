import axios from 'axios';
import React, { useState } from 'react';

// placeholder fake API
const url = 'https://jsonplaceholder.typicode.com/todos/2';
// news API
const url_news =
  'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f';

function ApiGet() {
  const [data, setData] = useState(null);
  const handleClick = async () => {
    /*
    axios
      .get('https://jsonplaceholder.typicode.com/todos/2')
      .then((response) => setData(response.data));
      */
    const response = await axios.get(url_news);
    setData(response.data);
  };
  /* fetch(url, header정보) => Promise를 리턴
  // then( 응답결과 => {} )
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
*/
  /* Axios 라이브러리
  // 현재 가장 많이 사용되고 있는 HTTP 클라이언트
  // Promise 기반으로 리턴
  axios
    .get('https://jsonplaceholder.typicode.com/todos/2')
    .then((response) => console.log(response.data));
     */
  return (
    <div>
      <h2>ApiGet</h2>
      <button onClick={handleClick}>데이터 불러오기</button>
      {data && <p>{JSON.stringify(data, null, 2)}</p>}
    </div>
  );
}

export default ApiGet;
