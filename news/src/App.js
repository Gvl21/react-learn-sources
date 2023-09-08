//import ApiGet from './components/ApiGet';
//import ApiPractice from './components/ApiPractice';
import { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  /* SPA 리팩토링하면서 category State 제거
  const [category, setCategory] = useState('all');

  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);
*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewsPage />} />
        <Route path='/:category' element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
