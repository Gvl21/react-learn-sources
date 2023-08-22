// 모듈 불러오기
import { PI, getArea, getCircle } from './circles.js';
// a모듈 정체를 circle 이라는 객체로 불러오기
import * as circle from './circles.js';
// 기본 값으로 불러오기
// 중괄호를 이용해 이름 명시하지 않아도 되고,
// 자유롭게 이름 지정가능
import plus from './calculator.js';

console.log(plus(1, 2));

// 라이브러리 사용하기
import _ from 'lodash';

const arr = [1, 2, 234, 42, 1, 2, 2, 2];
const uniqArr = _.uniqBy(arr);
console.log(uniqArr);

// 파일에서 구조분해할당 식으로 각 변수명과 함수명에 바인딩
console.log(PI, getArea(2), getCircle(3));

// 파일 내부 export 된 각 변수(함수)들을 객체로 불러오기
circle.PI;
circle.getArea();
circle.getCircle();

// 터미널에서 npm 패키지 만들기 npm init
// package.jsn이 생성된다.
// script 객체에 명령어("start" : "node index.js")를 입력하고
// 터미널에서 npm run start
// 진입정을 통해 실행

// 모듈 시스템
// CommonJS 문법  require : 기본값(nodejs)
// ** ESModule 문법 모듈 시스템  import / export
// package.json => "type" : "module" 추가
console.log('Hello NPM!');
