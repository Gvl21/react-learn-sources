/* 커스텀 훅 만들기 
- 관례적으로 use를 앞에 붙여 hook임을 나타낸다.
- 여러 컴포넌트에서 사용되는 기능을 별도로 분리
- 중복 코드 줄이기 & 재사용성 높이기
*/
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../App';
import { useNavigate } from 'react-router-dom';

function useDiary(id) {
    /** Context 에서 일기데이터를 가져와서 파라미터로 제공된 id와 일치하는 diary 객체를 찾아 반환하는 훅 */
    const data = useContext(StateContext);
    const [diary, setDiary] = useState();

    const navigate = useNavigate();

    // 3. useEffect 실행
    useEffect(() => {
        const matchDiary = data.find((item) => String(item.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            // 해당 id에 매칭되는 일기가 없을 경우 '/' 홈 페이지로 보내기
            // replace 옵션 : 뒤로가기 비활성화
            alert('일기가 존재하지 않습니다.');
            navigate('/', { replace: 'true' });
        }
    }, [id, data]);

    return diary;
}

export default useDiary;
