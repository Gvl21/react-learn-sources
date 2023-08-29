import React from 'react';

function AnswerList({ num, answer, checkMatch }) {
  const inputNum = num[num.length - 1];
  const tryNum = num.length;
  const answer0 = checkMatch(answer, inputNum);
  const answerData = [
    {
      try: tryNum,
    },
  ];

  return (
    <div>
      <ul>{}</ul>
    </div>
  );
}

export default AnswerList;
