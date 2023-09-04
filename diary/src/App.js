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
function reducer(state, action) {}

// 상태와 상태변환 컨텍스트 분리
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(4);
    return (
        <StateContext.Provider value={data}>
            <DispatchContext.Provider value={{}}>
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
