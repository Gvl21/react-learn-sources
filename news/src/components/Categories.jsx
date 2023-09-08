import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스면',
  },
  {
    name: 'entertainment',
    text: '연예면',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;
`;

const Category = styled(Link)`
  font-size: 1.2rem;
  margin: 0.5rem;
  cursor: pointer;

  color: black;
  text-decoration: none;

  &:hover {
    color: aquamarine;
    border-bottom: 2px solid aquamarine;
  }
`;

function Categories() {
  return (
    <CategoriesBlock>
      {categories.map((item) => (
        <Category key={item.name} to={`/${item.name}`}>
          {item.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
