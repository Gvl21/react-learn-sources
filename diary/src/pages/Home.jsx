import React from 'react';
import Button from '../component/Button';
import Header from '../component/Header';
import { useState } from 'react';
import DiaryList from '../component/DiaryList';

function Home() {
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${
        pivotDate.getMonth() + 1
    }월`;
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));

    };
    return (
        <div>
            <Header
                title={headerTitle}
                left={<Button text={'<'} onClick={onDecreaseMonth} />}
                right={<Button text={'>'} onClick={onIncreaseMonth} />}
            />
            <DiaryList />
        </div>
    );

    // 쿼리 스트링 가져오기 {path}?key=value
    //   const [URLSearchParams, SetURLSearchParams] = useSearchParams();
    //   return (
    //     <div>
    //       <Header
    //         title={'제목'}
    //         left={<Button text='왼쪽' />}
    //         right={<Button text='오른쪽' />}
    //       />
    //       <Editor initData={{
    // date : new Date().getTime,
    //         emotionId : 1,
    //         content : '이전 일기',
    //       }}/>
    //       <Button text={'button'} onClick={() => alert('good')} />
    //       <Button text={'hello'} type={'positive'} onClick={() => alert('hello')} />
    //       <Button text={'bye'} type={'negative'} onClick={() => alert('bye')} />
    //     </div>
    //   );
}

export default Home;
