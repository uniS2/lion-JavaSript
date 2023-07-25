import { getNode } from "../dom/getNode.js";
import { xhr } from "./xhr.js";

function delay(callback, timeout=1000) {
  setTimeout(callback, timeout);

  setTimeout(() => {
    callback
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
/* delay(()=>{
  console.log(2);
  delay(console.log(3),1000);
},1000) */

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

  return new Promise((resolve, reject) => {
    resolve('성공입니다!!')
  })
}

console.log(delayP());  //? promise 객체가 튀어나온다.

delayP()
.then((result)=>{ //? return 결과 확인가능
  console.log(result);
})