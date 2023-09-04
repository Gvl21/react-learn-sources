import React from 'react';
import './DiaryItem.css';
import { getEmotionImgById } from '../util';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function DiaryItem({ id, emotionId, content, date }) {
    // useNvigate 커스텀 훅 위치를 이동시키는 함수를 반환.
    // navigate 함수
    // -1 : 뒤로가기
    // 기타 문자열 : 해당 path로 이동
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/diary/${id}`);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className='DiaryItem'>
            <section
                className={['image_section', `image_section_${emotionId}`].join(
                    ' '
                )}
            >
                <img
                    src={getEmotionImgById(emotionId)}
                    alt={id}
                    onclick={goDetail}
                />
            </section>

            <section className='info_section' onclick={goDetail}>
                <div class='date_wrapper'>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div class='content_wrapper'>{content.slice(0, 30)}</div>
            </section>

            <section className='button_section'>
                <Button text={'수정하기'} onClick={goEdit} />
            </section>
        </div>
    );
}

export default DiaryItem;
