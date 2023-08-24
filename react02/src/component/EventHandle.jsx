export default function EventHandle() {
  const handleOnClick = (event) => {
    alert('버튼을 클릭했을 때 발생하는 이벤트');
    console.log(event.target);
  };

  // HTML의 이벤트 속성이 JSX에서 camelCase로 바뀐다.
  // 이벤트 핸들러 함수를 호출한다.
  // 콜백함수로 함수 그 자체를 전달.
  return (
    <div>
      <button name='첫번째 버튼' onClick={handleOnClick}>
        Click me!
      </button>
      <br />
      <button name='두번째 버튼' onClick={handleOnClick}>
        Click me!
      </button>
    </div>
  );
}
