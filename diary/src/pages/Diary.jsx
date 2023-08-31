import React from 'react';
import { useParams } from 'react-router-dom';

function Diary() {
    // URL 동적경로 파라미터 가져오기
  const { id } = useParams();

  return <div>{id}번 Diary</div>;
}

export default Diary;
