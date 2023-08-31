import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Home() {
    // 쿼리 스트링 가져오기 {path}?key=value
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  return <div>Home</div>;
}

export default Home;
