import React from 'react';
import { useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

function Diary() {
    // 1. 컴포넌트 마운트 : diary = undefined
    // URL 동적경로 파라미터 불러오기
    // 문자열을 반환한다. /diary/{id}
    const { id } = useParams();

    // 2.useDiary 커스텀 훅 실행 :
    const diary = useDiary(id);

    // 4. 컴포넌트 업데이트 : diary = {...} 리렌더링
    if (!diary) {
        return <div>로딩중입니다...</div>;
    } else {
        return (
            <div>
                <div>{id}번 Diary</div>
                {/* <div>{diary.date}</div> */}
                <div>{diary.content}번</div>
            </div>
        );
    }
}

export default Diary;
