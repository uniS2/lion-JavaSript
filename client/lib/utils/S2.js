//% 1. fetch 자체는 promise를 반환
//% 2. 결과 가져오기 - await, then
//* fetch 요청은 두 개의 await 호출로 구성 : 상태, 결과
// const response = await fetch('https://pokeapi.co/api/v2/pokemon/143')

/* if(response.ok){
  const data = await response.json(); //% 응담을 파싱해 JSON 객체로 변경 <-> xhr : JSON.parse 라는 해석기를 통해 변환
  console.log(data);
} */

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Arrow-Origin': '*',
  },
};

export const S2 = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {  //^ 깊은 복사 (deep copy)
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  const response = await fetch(url, restOptions); //^ get 통신 = 프라미스 객체 -> then / await (async) 1) 코드실행흐름제어-resolve, reject 반환할 때까지 2) result 값 내뱉는 역할

  if (response.ok) {
    //^ 프라미스 객체의 ok!
    response.data = await response.json(); //% 응담을 파싱해 JSON 객체로 변경 <-> xhr : JSON.parse 라는 해석기를 통해 변환
    // console.log(response) //^ => data (키 추가)
  }

  return response;  //^ promise 객체
};

const response = await S2({
  url: URL,
  method: 'POST',
  body: JSON.stringify({ name: 'S2' }),
});

const userData = response.data;

// console.log(userData);

/* const response = await S2(URL);
const userData = response.data;

console.log(userData)

userData.forEach((item) => {
  console.log(item);

userData.forEach((item) => {
  insertLast(document.body, `<div>${item.name}</div>`)
})
}); */


S2.get = (url, options) => {
  return S2({
    url,
    ...options
  })
}
// S2.get()  // undefined -> return : promise Object

const user = {
  name:'tiger',
  age:33,
  kindness:true
}

/* S2.post(
  URL,
  user,
  {
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  }
) */

S2.post = (url, body, options) => {
  return S2({
    method:'POST',
    url,
    body:JSON.strinngify(body),
    ...options
  })
}

S2.delete = (url, options) => {
  return S2({
    method:'DELETE',
    url,
    ...options
  })
}

S2.put = (url, body, options) => {
  return S2({
    method:'PUT',
    url,
    body:JSON.strinngify(body),
    ...options
  })
}

// const data = await S2.get(URL);
// console.log(data);

// const response = await tiger.get(URL) //^ promise Object


//$ 정리
/* 
$ fetch는 왜 쓰는 건가요?
- 왜 데이터를 요청 해야 하는겁니까?
  오늘 서울의 날씨는 00입니다
  서울: 서울의 기온은 0도 입니다
  따라서, 지역 선택 -> 날씨 정보
  -> 지역 선택 => 날씨 정보
- "client와 가장 밀접한 개발자 '프론트개발자'"

fetch(url) : 기본 get 통신 = 프라미스 객체 
-> then 또는 await (async) 로 결과 받을 수 있다.
+ await 역할은
  1) 코드실행흐름제어 - resolve, reject 반환할때까지
  2) result 값 내뱉는 역할

=> 프라미스 객체의 ok! 떨어지면
`response.json()` 응답을 파싱해 JSON 객체로 변경! -> data 키에 저장 (필수는 아니다)

`response = await S2(URL)` //^ 응답
`response.data = await response.json()` //^ 응답 -> 파싱
`userData = response.data`
*/

//? [0727 범쌤] 간단한 예시로 정리
const responses = await fetch(URL);
const data = await responses.json();

console.log( data );

// fetch(URL).then((result)=>{

//     result // responses object
//     return result.json() // promise
// })
// .then((result)=>{
//   console.log( result );
// })