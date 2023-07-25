import { xhr } from './lib/index.js';

xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  //^ naver.com 의 경우 우리가 허용을 해도 서버는! 권한을 주고싶지! 않와!!!!!!!! CORS error 가 떨어지는 이유 (auth: number) => 서버 개발자의 문제 (권한)
  (res) => {
  console.log(res);
});