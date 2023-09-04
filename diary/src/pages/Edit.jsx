import React from 'react';
import Editor from '../component/Editor';
import Header from '../component/Header';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <Header
                title={'일기 수정하기'}
                left={<Button text={'< 뒤로가기'} onClick={goBack} />}
                right={<Button text={'삭제하기'} type={'negative'} />}
            />

            <Editor />
        </div>
    );
}

export default Edit;
