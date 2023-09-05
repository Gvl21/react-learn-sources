import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { Route, Routes } from 'react-router-dom';
import { useRef } from 'react';

// const mockData = [
//     {
//         id: 1,
//         date: new Date(2023, 9, 3).getTime(),
//         emotionId: 1,
//         content: '안녕 일기1',
//     },
//     {
//         id: 2,
//         date: new Date(2023, 11, 10).getTime(),
//         emotionId: 3,
//         content: '안녕 일기2',
//     },
//     {
//         id: 3,
//         date: new Date().getTime(),
//         emotionId: 5,
//         content: '안녕 일기3',
//     },
// ];
function reducer(state, action) {
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }

        case 'CREATE': {
            const newState = [action.data, ...state];
            localStorage.setItem('diaryList', JSON.stringify(newState));
            return newState;
        }
        case 'UPDATE': {
            // 기존 데이터 배열에서 id에 매칭되는 내용 수정 (삼항연산자 사용)
            const newState = state.map((e) =>
                String(e.id) === String(action.data.id) ? { ...action.data } : e
            );
            localStorage.setItem('diaryList', JSON.stringify(newState));
            return newState;
        }
        case 'DELETE': {
            const newState = state.filter(
                (e) => String(e.id) !== String(action.id)
            );
            localStorage.setItem('diaryList', JSON.stringify(newState));
            return newState;
        }

        default:
            return state;
    }
}

// 상태와 상태변환 컨텍스트 분리
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, []);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const idRef = useRef(1);

    // 컴포넌트가 마운트 될 때 로컬저장소에서 데이터 가져오기
    useEffect(() => {
        const rawData = localStorage.getItem('diaryList');
        // 로컬 스토리지에 데이터가 없는 경우 ( 로컬스토리지 null 반환시 런타임 에러 )
        if (!rawData) {
            setIsDataLoaded(true);
            return;
        }

        // 로컬 스토리지에 데이터가 있는 경우
        // 문자열 => [ {}, {}, ... ] 파싱
        const localData = JSON.parse(rawData);
        // 데이터를 불러왔으나 [] 빈 배열인 경우
        if (localData.length === 0) {
            setIsDataLoaded(true);
            return;
        }
        // id 중복문제 해결 localStorage 최신값보다 항상 1이 많도록 설정
        idRef.current = localData[0].id + 1;

        // 파싱된 데이터를 초기화
        dispatch({ type: 'INIT', data: localData });
        // 로딩 상태 변경 => true
        setIsDataLoaded(true);
    }, []);

    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current,
                date: new Date(date).getTime(),
                emotionId,
                content,
            },
        });
        idRef.current += 1;
    };
    // 수정 함수
    const onUpdate = (id, date, emotionId, content) => {
        // Editor에서 데이터를 받아서 action 객체 data로
        // dispatch 함수를 실행 => reducer 함수에서
        // dispatch 함수의 파라미터 => action 객체
        dispatch({
            type: 'UPDATE',
            data: { id, date: new Date(date).getTime(), emotionId, content },
        });
    };
    const onDelete = (id) => {
        dispatch({ type: 'DELETE', id });
    };

    // 데이터 로딩이 되지 않았을 때 로딩 화면
    if (!isDataLoaded) {
        return <div>로딩 중입니다.</div>;
    } else {
        return (
            <StateContext.Provider value={data}>
                <DispatchContext.Provider
                    value={{ onCreate, onUpdate, onDelete }}
                >
                    <div className='App'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/new' element={<New />} />
                            <Route path='/diary/:id' element={<Diary />} />
                            <Route path='/edit/:id' element={<Edit />} />
                        </Routes>
                    </div>
                </DispatchContext.Provider>
            </StateContext.Provider>
        );
    }
}
export default App;
