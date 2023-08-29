import React, { useState } from 'react';

function Square({ value, onClick }) {
  // 컴포넌트 함수의 최상단 Top-level에서 Hook 사용
  // props와 state의 차이 : 값이 컴포넌트 외부 <-> 내부에서 주어진다.
  // 이벤트는 하위요소(이벤트가 호출되는 html 태그에서 시작된다. 상태변겅함수(setter 또는 wrapper)는 props로 전달된다.)

  function handleClick() {}

  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

function Board({ curSquares, handlePlay, isNext, setIsNext }) {
  //   const [squares, setSquares] = useState(Array(9).fill(null));
  //   const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    // 중복된 사각형을 클릭했거나 ,배열을 계산해서 승리했을 때
    // null => falsy, null 이 아닌경우 truthy
    if (curSquares[i] || calculateWinner(curSquares)) {
      return; // null 이 아닌경우 종료
    }

    // 원본 배열의 카피본을 만든다.
    const nextSquares = curSquares.slice();
    // 사본의 인덱스 번째의 값을 변경

    if (isNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    // 변경된 사본을 업데이트하여 리렌더링

    // setSquares(nextSquares);
    setIsNext(!isNext);
    handlePlay(nextSquares);
  }

  const winner = calculateWinner(curSquares);
  let status;
  if (winner) {
    status = '승자는 ' + winner;
  } else {
    status = ' 다음 플레이어는 ' + (isNext ? 'X' : 'O');
  }

  return (
    <div>
      <div>{status}</div>
      <div className='board-row'>
        <Square value={curSquares[0]} onClick={() => handleClick(0)} />
        <Square value={curSquares[1]} onClick={() => handleClick(1)} />
        <Square value={curSquares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={curSquares[3]} onClick={() => handleClick(3)} />
        <Square value={curSquares[4]} onClick={() => handleClick(4)} />
        <Square value={curSquares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={curSquares[6]} onClick={() => handleClick(6)} />
        <Square value={curSquares[7]} onClick={() => handleClick(7)} />
        <Square value={curSquares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function Game() {
  const [isNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // history[0] = [null *9] 게임의 초기값
  // history[1] = 클릭이벤트(게임진행) 발생시마다 길이 9의 배열이 담긴ㄷ.
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  // 가장 최근의 게임기록은 currentSquares에 담긴다.

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext(!isNext);
  }
  //   function jumpTo(move) {
  //     setHistory(history.slice(0, move));
  //   }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // X true 0, 2, 4, 6, 8
    // O false 1, 3, 5, 7
    setIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = move + '번째로 이동';
    } else {
      description = '게임 시작으로 이동';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div className='game-board'>
        <Board
          isNext={isNext}
          setIsNext={setIsNext}
          curSquares={currentSquares}
          handlePlay={handlePlay}
          history={history}
        />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
