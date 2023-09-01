import React from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';


function DiaryList({ data }) {
    return (
        <div className='DiaryList'>
            {/* 상단부 : 정렬 및 새 일기 쓰기 */}
            <div className='top-side'>
                <select name='' id=''>
                    <option value=''>최신순</option>
                    <option value=''>오래된 순</option>
                </select>
                <select name='' id=''>
                    <option value=''>모든 감정</option>
                    <option value=''>좋은 감정</option>
                    <option value=''>안 좋은 감정</option>
                </select>
                <Button text={'새 일기 쓰기'} type={'positive'}/>
            </div>
            {/* 하단부 : 일기 목록 */}
            {/* <div>
                {data.map((i) => {
                    <DiaryItem key={i.id}/>;
                })}
            </div> */}
        </div>
    );
}

export default DiaryList;
