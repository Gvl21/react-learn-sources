function PropsSpread(props) {
  // const addList = (a) => a



  // spread 연산자 {...props}를 통해서
  // 전달받은 객체의 키값으로 props로
  // 전달받고 구조분해 할당으로 변수로 전달받는다.
  const { name, age, skillList } = props;
  // 기본값을 설정해서, 전달되지 않았을 때의 오류를 방지한다.
  return (
    <div>
      <h1>
        {name}은 {age}세입니다.
      </h1>
      {/* <input onSubmit={addList} type="text"></input> */}
      <h2>{skillList.length}개의 기술을 가지고 있습니다.</h2>
      <p>{skillList}</p>
    </div>
  );
}
// props가
PropsSpread.defaultProps = {
  skillList: [],
};
export default PropsSpread;
