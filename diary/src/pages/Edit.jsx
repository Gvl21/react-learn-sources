// import React from 'react';
// import Editor from '../component/Editor';
// import Header from '../component/Header';
// import Button from '../component/Button';
// import { useNavigate } from 'react-router-dom';

// function Edit() {
//     const navigate = useNavigate();
//     const goBack = () => {
//         navigate(-1);
//     };
//     return (
//         <div>
//             <Header
//                 title={'일기 수정하기'}
//                 left={<Button text={'< 뒤로가기'} onClick={goBack} />}
//                 right={<Button text={'삭제하기'} type={'negative'} />}
//             />

//             <Editor />
//         </div>
//     );
// }

// export default Edit;
import React, { useContext } from 'react';
import Editor from '../component/Editor';
import Header from '../component/Header';
import Button from '../component/Button';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import { DispatchContext } from '../App';

function Edit() {
    document.title = '일기 수정';
    const { onDelete } = useContext(DispatchContext);
    // URL 에서 동적 주소(매개변수)를 id로 받아온다.
    const { id } = useParams();
    //customHook에서 id와 일치하는 일기데이터만 가져온다.
    const diaryData = useDiary(id);

    // 이벤트 핸들러
    const navigate = useNavigate();
    // 뒤로가기
    const goBack = () => {
        navigate(-1);
    };
    //삭제버튼 클릭
    const handleOnDelete = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            onDelete(id);
            navigate('/');
        }
    };
    return (
        <div>
            <Header
                title='일기 수정하기'
                left={<Button text='뒤로가기' onClick={goBack} />}
                right={
                    <Button
                        text='삭제하기'
                        type='negative'
                        onClick={handleOnDelete}
                    />
                }
            />
            {/* 가져온 일기데이터를 Editor 초기값으로 전달 */}
            <Editor initData={diaryData} />
        </div>
    );
}

export default Edit;
