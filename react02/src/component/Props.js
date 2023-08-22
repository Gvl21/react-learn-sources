// 컴포넌트의 첫번쨰 매개변수 인자 값
// props => properties의 줄임말
// 리액트에서 관례적으로 props 라고 변수를 줍니다

export const Props = (props) => {
  const { name, study } = props;
  return (
    <h1 style={{ background: 'orange' }}>
      {name} {study}
    </h1>
  );
};

export default Props;
