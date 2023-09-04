import React from 'react';
import Editor from '../component/Editor';
import Header from '../component/Header';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

function New() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <Header
                title={'새 일기'}
                left={<Button text={'뒤로가기'} onClick={goBack} />}
                // right={<Button text={'뒤로가기'} />}
            />
            <Editor />
        </div>
    );
}

export default New;
