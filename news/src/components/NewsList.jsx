import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../hooks/usePromise';

function NewsList({ category }) {
  const queryString = category === 'all' ? '' : `category=${category}&`;
  const url = `https://newsapi.org/v2/top-headlines?country=kr&${queryString}apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`;

  const [response, error, loading] = usePromise(
    () => axios.get(url),
    [category]
  );

  /* 커스텀훅 사용전
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // 컴포넌트 마운트 시점에만 API 호출하기
  useEffect(() => {
    // 로딩을 시작할 때
    setLoading(true);
    // API 데이터를 가져오는 함수
    const fetchData = async () => {
      const queryString = category === 'all' ? '' : `category=${category}&`;
      const url = `https://newsapi.org/v2/top-headlines?country=kr&${queryString}apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`;
      // 응답이 성공되었을 경우 reslove
      try {
        // axios로 응답받은 데이터
        const response = await axios.get(url);
        // [ {}, {}, {} ... ]
        // articles 상태를 응답받은 데이터 중 필요한 데이터로 설정
        setArticles(response.data.articles);
      } catch (error) {
        // 응답이 실패되었을 경우 reject
        console.log(error);
      }
      // 데이터 로드를 마쳤을 때
      setLoading(false);
    };
    fetchData();
  }, [category]);

  const sampleArticle = {
    title: '제목',
    url: 'https://naver.com',
    urlToImage: 'https://via.placeholder.com/160',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, illum exercitationem. Nam cum blanditiis, nihil possimus exercitationem iste quam, numquam animi corrupti illum doloribus. Odio voluptatibus aperiam at accusantium sed!,',
  };
*/
  // 데이터 가져오는 중일 때
  if (loading) {
    return <div>로딩 중입니다.</div>;
  }
  // 에러의 경우
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  // 데이터가 없는 경우 falsy
  if (!response) {
    return null;
  }
  // 데이터가 있는 경우
  const articles = response.data.articles;

  return (
    <div>
      {articles.map((article, idx) => (
        <NewsItem key={idx} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
