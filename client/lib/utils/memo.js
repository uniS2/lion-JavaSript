// Memoization (https://bit.ly/memoiz)
// 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술
// react에서는 useMemo

import { getNode } from "../dom/index.js"

const cache = {}

export const memo = (key, callback) => {
  if(!callback) return cache[key];  // 해당 키를 가지는 변수만 반환

  if(cache[key]){
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key]
  }

  cache[key] = callback();  // computed property

  console.log(cache);
}

memo('cube', () => getNode('#cube'))  // getNode 한 값 자체가 casche[key]의 value로 설정됨
memo('cube', () => 1,2,3) // * 덮어쓰기 되므로 중복 처리!

console.log(memo('cube'));  // div#cube

// 객체를 만들어서 key:value 쌍으로 저장

/* {
  cube: <div id ='cube'></div>
} */