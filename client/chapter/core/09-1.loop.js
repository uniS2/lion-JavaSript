/* --------------- */
/* While Loop      */
/* --------------- */

/* let repeat = 0;
while(repeat < 10) {

  console.log(repeat);

  repeat++;
} */



const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

/* let z1 = performance.now();

let i = 0;
while(i < frontEndDev.length){
  // 성능이슈면에서 변수를 선언 및 할당하여 최종값을 반환하는 방식을 추천
  let value = frontEndDev[i];

  console.log(value);

  i++;
}

let z2 = performance.now();

console.log(z2 - z1); */


// while 문 (역순환 : 역방향)

/* let s1 = performance.now();

let l = frontEndDev.length - 1;
while(l >= 0){
  let value_2 = frontEndDev[l];

  console.log(value_2);

  l--;
}

let s2 = performance.now();

console.log(s2 - s1); */


// 원본 파괴
// 배열의 깊은 복사

// let copyArray = frontEndDev.slice();  // old

let copyArray = [...frontEndDev]; // new

while(copyArray.length){

  console.log( copyArray.shift() ); // pop. 역방향
}




// 성능 진단 : 순환 vs. 역순환
// 성능면에서 역순환이 좋다!