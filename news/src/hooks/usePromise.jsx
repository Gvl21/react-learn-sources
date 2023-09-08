import React, { useEffect, useState } from 'react';

// 커스텀 훅 만들기 : API 호출에서 Promise 쓰는 경우
// Promise 콜백함수와, useEffect 의존성목록을
// 파라미터로 받아
// [성공, 실패, 로딩상태]를 배열로 리턴하는 훅
function usePromise(promiseCallBack, dependancyList) {
  const [resolve, setResolve] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolve = await promiseCallBack();
        setResolve(resolve);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
  }, dependancyList);

  return [resolve, error, loading];
}

export default usePromise;
