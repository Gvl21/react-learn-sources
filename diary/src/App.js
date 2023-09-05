import React, { useReducer } from 'react';
import './App.css';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { getEmotionImgById } from './util';
import { Link, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';

const mockData = [
    {
        id: 1,
        date: new Date(2023, 9, 3).getTime(),
        emotionId: 1,
        content: '안녕 일기1',
    },
    {
        id: 2,
        date: new Date(2023, 11, 10).getTime(),
        emotionId: 3,
        content: '안녕 일기2',
    },
    {
        id: 3,
        date: new Date().getTime(),
        emotionId: 5,
        content: '안녕 일기3',
    },
];
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE': {
            return [action.data, ...state];
        }
        case 'UPDATE': {
            // 기존 데이터 배열에서 id에 매칭되는 내용 수정 (삼항연산자 사용)
            return state.map((e) =>
                String(e.id) === String(action.data.id) ? { ...action.data } : e
            );
        }
        case 'DELETE': {
            return state.filter((e) => String(e.id) !== String(action.id));
        }

        default:
            return state;
    }
}

// 상태와 상태변환 컨텍스트 분리
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(4);
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

    return (
        <StateContext.Provider value={data}>
            <DispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
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

export default App;
