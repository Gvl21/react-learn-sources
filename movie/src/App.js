import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Home from './page/Home';
import Detail from './page/Detail';
import About from './page/About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about' element=<About /> />
                <Route path='/' element=<Home /> />
                <Route path='/detail/:id' element=<Detail /> />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
