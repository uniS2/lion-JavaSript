/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let j = 2;

for (; j <= 10; ) {
  j++;
  if (j % 2 === 0) {
    // console.log(j);
  }
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
/* 
for (let i = 0; i < l; i++) {   // let 블록 범위가 먼저

  if (frontEndDev[i] !== 'JavaScript') {
    if ((frontEndDev[i] !== 'SVG') | (frontEndDev !== 'jQuery')) {
      console.log(frontEndDev[i]);
    } else {
      continue;
    }
  } else {
    console.log(frontEndDev[i]);
    break;
  }
}
 */

// 범쌤 풀이
// for(let i = 0, l = frontEndDev.length; i < l; i++)   // 3. 변수 2개 선언시

for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];   // 1. 변수를 각각 따로 분리하기 : 리팩토링시 편리
  let lower = value.toLowerCase();

  if(lower.includes('svg') || lower.includes('jqeury')) continue;   // 2. 조건식은 간단하게
  if(lower.includes('jquery')) break;

  console.log(value);
}

//   - 무한 루프 (브레이크)

//   - for 문 (역순환)
let zero = 0;

for (let i = l; zero < i; ) {
  console.log(frontEndDev[--i]);
}

// let i = l, subject;    // 3. 변수 2개 선언시 - single let 선언 방식

/* for(let i = l,subject; (subject = frontEndDev[--i]);){
  console.log(subject)
;} */