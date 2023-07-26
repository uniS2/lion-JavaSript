import { S2 } from "./lib/index.js";

const data = await S2.get('https://jsonplaceholder.typicode.com/users');

console.log(data);

// AXIOS : 함수 / 메서드 처럼 사용가능 -> 라이브러리 (https://axios-http.com/kr/docs/intro)

//* UpDate
//^ PUT을 쓰려면 GET으로 가져온 다음 부분 수정(추가)해서 다시 받아온 전체를 PUT
//^ PATCH : 리소스 부분수정

//* React: 변경하자마자 새로운 값 다시 get해 다시 렌더링해 (리렌더링)