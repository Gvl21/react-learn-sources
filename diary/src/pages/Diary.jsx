import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import Header from '../component/Header';
import Button from '../component/Button';
import { getFormatDate } from '../util';

function Diary() {
    // 1. 컴포넌트 마운트 : diary = undefined
    // URL 동적경로 파라미터 불러오기
    // 문자열을 반환한다. /diary/{id}
    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    // 2.useDiary 커스텀 훅 실행 :
    const diary = useDiary(id);

    // 4. 컴포넌트 업데이트 : diary = {...} 리렌더링

    // 로딩 상태 설정
    if (!diary) {
        return <div>로딩중입니다...</div>;
    } else {
        const { date, emotionId, content } = diary;
        const title = `${getFormatDate(new Date(date))} 일기`;
        return (
            <div>
                <Header
                    title={'타이틀'}
                    left={<Button text={'뒤로가기'} onClick={goBack} />}
                    right={<Button text={'수정하기'} onClick={goEdit} />}
                />
                <div>{id}번 Diary</div>
                {/* <div>{diary.date}</div> */}
                <div>{diary.content}번</div>
            </div>
        );
    }
}

export default Diary;
