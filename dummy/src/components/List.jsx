import React from 'react';

function List({ arr }) {

    return <ul>{arr !== [] && arr.map((num) => <li key={num}>{num}</li>)}</ul>;
}

export default List;
