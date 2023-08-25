import React, { Component } from 'react';

export default class LIfeCycle extends Component {
  // 생성 단계에서 호출
  constructor(props) {
    super(props);
    console.log('1.생성자가 호출됩니다.');
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log('2.컴포넌트가 마운트 될 것입니다.');
  }
  componentDidMount() {
    console.log('3.컴포넌트가 마운트 되었습니다.');
  }
  componentDidUpdate() {
    console.log('4.컴포넌트가 수정되었습니다..');
  }
  componentWillUnmount() {
    console.log('5. 컴포넌트가 곧 사라질겁니다.');
  }

  //  생명주기 생성, 업데이트 될 떄 화면을 업데이트 => 화면 반영
    render() {
    console.log('렌더링을 합니다.');
    return <div>LIfeCycle</div>;
  }
}
