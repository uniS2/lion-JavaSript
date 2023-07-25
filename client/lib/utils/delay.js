import { getNode } from '../dom/getNode.js';
import { xhr } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);

  setTimeout(() => {
    callback;
  }, timeout);
}

//* 1안
/* 
console.log(1);

delay(()=>{
  console.log(2);
  
  delay(()=>{
    console.log(3);
  }
}) */

//* 2안 : 에러ㅠ
/* console.log(1);

delay(()=>{
  console.log(2);
  
  delay(console.log(3));
}) */

//? 범쌤
/* delay(()=>{
  console.log(1);
  
  delay(()=>{
    console.log(2);

    delay(()=>{
      console.log(3);
    })

    console.log('b'); //? 찾기 너무 힘들다
  })
}) */

//? xhr 예시
/* xhr.get('https://jsonplaceholder.typicode.com/users',

(res)=>{
  console.log(res);
  xhr.get('server',()=>{
    xhr.get('pw',()=>{
      ...
    })
  })
}) */

//? getNode
const first = getNode('.first');
const second = getNode('.second');

//? callback의 문제와 해결 방안
// 한번에 실행 : 올라감과 동시에 회전 => 제자리에서 회전
// 원하는 실행 : 올라가기 -> 회전 -> 내려가기
// gsap 만한게 업따 ^^*
/* first.style.top = '-100px';
first.style.transform = 'rotate(360deg)'
first.style.top = '0' */

/* delay(()=>{
  first.style.top = '-100px';

  delay(()=>{
    first.style.transform = 'rotate(360deg)';

    delay(()=>{
      first.style.top = '0';
      second.style.top = '0';
    })
    
    second.style.top = '100px';
  })
}) */

//? delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.
function delayP(){
  
  //$ 성공이야? (약속해 알려주기로) 그러고 나서(then) 이거 해
  //$ 실패야? (약속해 알려주기로) 그럼 이거 해해

  return new Promise((resolve, reject) => {
    resolve('성공입니다!!')
  })
}

console.log(delayP());  //? promise 객체가 튀어나온다.

delayP()  //$ 객체 (new 생성자로 인해 생성된 Promise 객체)
.then((result)=>{ //? return 결과 확인가능
  console.log(result);
})

//$ Promise 정리
/* 
$ 1. new Promise 는 프라미스 객체를 반환한다.
$ 2. 인수로 넘겨주는 result, error가 자동으로 결과 또는 에러를 도출한다.
$ 3. excutor(실행함수) 에서 반환되는 결과는 무조건 .then 을 통해 받을 수 있다.
+ always 사용하면 결과를 바로 받을 수 있다.
*/


//$ Promise 체이닝 미리보기
function delay_P() {
  return new Promise((성공, 실패) => {
    setTimeout(() => {
      성공('통신 성공');
      // 실패('통신 실패!!');
    }, 1000);
  });
}

delay_P()
.then((결과) => {
  console.log('로직 실행');

  return delay_P()
  /* return new Promise((성공, 실패) => {
    
  }) */
})
.then((결과) => {
  console.log('로직 실행');

  return delay_P()
})
.then((결과) => {
  console.log('로직 실행');
})


//$ fetch 미리보기
async function fetch(){
  const response = fetch('url', {
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })

  response ? // 기억이 안난...
}