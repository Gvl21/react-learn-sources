import React from 'react';

function Try({ obj, i }) {
  return (
    <li key={i}>
      {i + 1}차 시도 {obj.try} {obj.result}
    </li>
  );
}

export default Try;
