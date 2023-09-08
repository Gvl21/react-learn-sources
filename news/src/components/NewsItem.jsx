import React from 'react';
import { styled } from 'styled-components';

// Styled-Compoonent
// 자바스크립트에서 CSS를 사용하는 방법 중 하나 (현재 인기있는)
// 확장프로그램 vscode-styled-components 설치 (자동완성)
const NewsItemBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 5px 5px 10px 5px rgba(199, 199, 199, 0.68);

  a {
    display: flex;
    color: black;
    text-decoration: none;
  }
  img {
    display: block;
    width: 160px;
    height: 160px;
    object-fit: cover;
    margin-right: 2rem;
  }
  .content h2 {
    font-size: 1.3rem;
  }
`;

function NewsItem({ article }) {
  const { title, url, urlToImage, description } = article;
  return (
    <NewsItemBlock>
      <a href={url}>
        <img src={urlToImage ?? 'https://via.placeholder.com/160'} alt='임시' />
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </NewsItemBlock>
  );
}

export default NewsItem;
