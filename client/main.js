// 모듈 프로그래밍 -> js 의 어려운 문법은 x. 방법론

// getNode 가져오기

// 번들러의 힘
// webpack vite (default 모듈 환경: 내장 ".lib"로 경로 생략 가능)

// IIFE
// 이름 바꿔쓰기 기능, 함수자체를 모듈화, 내가 원하는 함수만 내보내는 것
/* (function (g) {
  g === window ;
})(window); 

(function ($) {

})(getNode); 

let getNodel
*/

// rename : as

import {
  getNode as $,
  getNodes,
  clearContents,
  insertLast,
} from './lib/index.js'; // 바닐라 자바스크립트 환경에서는 .js 붙여주어야함
// ? [page-1]
// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. result 출력 하기

const first = $('#firstNumber');
const second = $('#secondNumber');
const result = $('.result');
// ^ clear 버튼
const clear = $('#clear');

function handleInput() {
  let firstValue = +first.value;
  let secondValue = +second.value;
  let total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput); // ! event 주의..

// ? [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요

// 1. clear 버틀을 가져온다.
// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// 3. firstValue 값을 지운다.
// 4. secondValue 값을 지운다.
// 5. result의 값을 지운다.
// 6. result에 - 값을 넣는다.

function handleClear() {
  clearContents(first);
  clearContents(second);
  clearContents(result);
  insertLast(result, '-');
  // result.textContent = '-';
}

clear.addEventListener('click', handleClear); // ! event 종류..!

// ? [page-3]
// 위 내용을 이벤트 위임으로 변경
// .calculator 이벤트 input

// ^ 이벤트 위임
// handle 이해하기 쉬운 prefix
const calculator = $('.calculator');
const numberInputs = Array.from(getNodes('input:not(#clear)')); // nodeList -> 배열
// $ css 선택자 input:not(#clear)

function handleInput2() {
  const total = numberInputs.reduce(
    (total, input) => total + Number(input.value),
    0
  );

  clearContents(result);
  insertLast(result, total); // 렌더링
}

function handleClick() {
  numberInputs.forEach(clearContents); // 생략구문 : 매개변수 item 하나만 받을 시 전부 생략 가능

  /*  numberInputs.forEach((item)=>{
    clearContents(item);
  }) */

  result.textContent = '-';
}

calculator.addEventListener('input', handleInput2);
clear.addEventListener('click', handleClick);
