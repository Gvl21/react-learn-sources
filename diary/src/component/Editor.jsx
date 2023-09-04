import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { getFormatDate, emotionList } from '../util';
import { useNavigate } from 'react-router-dom';
import './Editor.css';
import EmotionItem from './EmotionItem';
import { DispatchContext } from '../App';

function Editor({ initData }) {
    const { onCreate } = useContext(DispatchContext);
    const navigate = useNavigate();
    const dateObj = new Date();
    const [date, setDate] = useState(getFormatDate(dateObj));
    const [content, setContent] = useState('');
    const [emotionId, setEmotionId] = useState(3);

    useEffect(() => {
        if (initData) {
            setDate(getFormatDate(new Date(initData.date)));
            setEmotionId(initData.emotionId);
            setContent(initData.content);
        }
    }, [initData]);

    const onChangeHandler = (e) => {
        setDate(e.target.value);
    };
    const onChangeContentHandler = (e) => {
        setContent(e.target.value);
    };
    const onSubmitHandler = () => {
        onCreate(date, content, emotionId);
        navigate('/');
    };
    const handleChangeEmotion = (emotionId) => {
        setEmotionId(emotionId);
    };
    const handleBack = () => navigate(-1);

    return (
        <div className='Editor'>
            {/* 오늘 언제? */}
            <section>
                <h3>오늘은 ?</h3>
                <input
                    type='date'
                    value={date}
                    onChange={onChangeHandler}
                    name=''
                    id=''
                />
            </section>
            {/* 오늘 감정 */}
            <section className='emotion'>
                <h3>오늘의 감정은?</h3>
                <div className='emotion-status'>
                    {emotionList.map((item) => (
                        <EmotionItem
                            key={item.id}
                            {...item}
                            onClick={handleChangeEmotion}
                            isSelected={emotionId === item.id}
                        />
                    ))}
                </div>
            </section>
            {/* 오늘 일기 */}
            <section id='diary-section'>
                <h3>오늘의 일기</h3>
                <textarea
                    placeholder='오늘 하루는 어땠어'
                    value={content}
                    onChange={onChangeContentHandler}
                />
            </section>
            {/* 작성 완료 */}
            <section className='bottom'>
                <Button text={'취소하기'} onClick={handleBack} />
                <Button
                    text={'작성완료'}
                    type={'positive'}
                    onClick={onSubmitHandler}
                />
            </section>
        </div>
    );
}

export default Editor;
