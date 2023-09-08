import React from 'react';

function ApiPractice() {
  /*
  // 비동기적 수행
  // 콜백함수
  function printMe() {
    console.log('안녕하세요');
  }
  setTimeout(printMe, 3000);
  // 대기중이 먼저 출력
  console.log('대기 중');

  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  increase(0, (result) => {
    console.log(result);
  });

  // 콜백 지옥 : 1초 후에 10씩 더하는 방법
  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
          increase(result, (result) => {
            console.log(result);
            console.log('작업 완료');
          });
        });
      });
    });
  });
*/
  // Promise
  function increasePromise(number) {
    // resolve는 성공, reject는 실패
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10; // 10씩 더한 결과
        // 실패 (reject) : 숫자가 너무 클 경우
        // 실패의 이유를 reject에
        if (result > 41) {
          const e = new Error('숫자가 너무 큽니다.');
          return reject(e);
        }
        // 더한 값을 성공 함수에 넣는다.
        resolve(result);
      }, 1000);
    });
    return promise;
  }

  /* 프로미스 실행하기
  increasePromise(0)
    .then((number) => {   // then으로 resolve 값 받아오기
      console.log(number);
      return increasePromise(number);
    })
    .then((number) => {
      console.log(number);
      return increasePromise(number);
    })
    .then((number) => {
      console.log(number);
      return increasePromise(number);
    })
    .then((number) => {
      console.log(number);
      return increasePromise(number);
    })
    .then((number) => {
      console.log(number);
      return increasePromise(number);
    })  // 에러가 발생할 경우 .catch를 통해 안다
    .catch((e) => {
      console.log(e);
    });
*/

  // async await ES2017에 추가된 비동기 문법
  async function run() {
    // await 키워드를 사용한 경우 async 키워드가 있는 함수로 감싸줘야 한다.
    try {
      // Promise 객체 앞에 await 키워드를 사용
      // Promise가 실행이 될떄까지 기다려 결과값 (reslove의 값)을 특정 변수에 담을 수 있다.
      let result = await increasePromise(0);
      console.log(result);
      result = await increasePromise(result);
      console.log(result);
      result = await increasePromise(result);
      console.log(result);
      result = await increasePromise(result);
      console.log(result);
      result = await increasePromise(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  run();
  return <div>ApiPractice</div>;
}

export default ApiPractice;
