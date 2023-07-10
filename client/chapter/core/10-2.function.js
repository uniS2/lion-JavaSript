/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);
  // '함수 안에서만 접근 가능한 인수들의 집합 객체'로서 배열과 유사한 형태를 가지고 있는 이것은 ? : arguments
  // +설명: 매개변수를 전달하지 않아도 알아서 집합(객체)를 만들어 준다 => 이 값을 받아 조건처리하는 방법들

  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구헤보자!

  let total = 0;

  // ? 1. for 문
  /* for(let i = 0; i < arguments.length; i++){
    total += arguments[i];
  } */

  // ? 2. for..of 문
  /*   for (let key of arguments) {
    total += key;
  } */

  // ? 배열이 아니기 때문에 반복문을 사용할 수 없다. 메서드도 가지고 있지 않음
  /* arguments.forEach(item) => {
    console.log(item);
  } */

  // ? 3. forEach 빌려쓰기
  // * 호출시 배열 arr의 요소 전체를 대상으로 실행
  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  // ? 4. slice를 빌려써서 배열로 만들기
  /* let realArray = Array.prototype.slice.call(arguments); // instance
  // Array의 slice 기능을 유사배열인 arguments가 call() 메서드를 통해 빌려서 진짜 배열을 realArray에 담는다.
  console.log(realArray);
  realArray.forEach(function(item){
    total += item;
  }) */

  // ? 5. Array.from() (static)
  /* let realArray = Array.from(arguments);
  console.log(realArray);
  realArray.forEach(function(item){
    total += item;
  }) */

  let arr = [10, 50, 100]; // 없으면 concat 해주어야함

  // ? 6. spread syntax

  // Object.prototype.toString() // instance method. 진짜 객체로 생성해야 가질 수 있는 능력

  // Object.entries() // static method. 마치 유틸함수처럼 쓸 수 있는.

  // let realArray = [...arguments, ...arr];

  let realArray = [...arguments];

  // console.log(realArray);

  /* realArray.forEach((item) => {
    total += item;
  }) */

  /* realArray.forEach(function(item, index){ // 콜백함수: 값이 정해져 있다. value
    total += item;
  }) */

  // ? 7. Array.reduce
  return realArray.reduce((acc, item) => {  // itme 누적값. accumulator
    return acc + item;
  }, 0);  // initValue: acc의 초기값 / 값이 나와야 쓸 수 있음 return.

  // return realArray.reduce((acc, item) => acc + item, 0)  // 화살표 함수 이용

  // return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 100);

// console.log(result);

const user = {
  name: 'tiger'
}

// user.name

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {  // isAcitve, success, fail
};
// console.dir(anonymousFunctionExpression)  // 내부 내용을 조회

// 함수, 문자, 숫자 모두 객체로부터 만들어짐 => 객체!
// anonymousFunctionExpression.name  // anonymousFunctionExpression. 자바스크립트의 비밀

// anonymousFunctionExpression.isActive = true;

// 유명(이름을 가진) 함수 (표현)식 = 일반 함수 표현식
let namedFunctionExpression = function hello(){

};  // namedFunctionExpression()

// 콜백 함수 (표현)식

let callbackFunctionExpression = function(isActive,success,fail){

  // const callback = function(){ console.log('콜백 함수 실행!');
  // const success = function(){ console.log('성공!')};

  if(isActive){
    // success();
    return;
  } else {
  // fail();
  }
};

// callbackFunctionExpression(true, b, c)

callbackFunctionExpression( 
  true, 
  function(){ console.log('성공!!') },
  function(){ console.log('실패!') }
)

// https://www.naver.com

const movePage = function(url, success, fail){

  // const callback = function{ console.log("콜백 함수 실행!")}
  
  if(url.match(/http.+www/) && typeof url === 'string'){  // 정규표현식
    // success(url) // 비동기 처리 방식
  }else{
    // fail()
  }
}

// movePage(url, success, fail) 콜백함수
movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
    setTimeout(() => {
      window.location.href = url
    }, 3000); // ? 타이머 만료 후 실행. callback, 3000 -> 초 뒤에 실행하겠다!
    
  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식 = 선언하자마자 즉시 실행. 값 출력 'MASTER'
// Immediately Invoked Function Expression
let IIFE;


// 변수의 보호
// 은닉화 incapsulation(캡슐화)

// 클로저 closure

// import css as c from "css.js";

// c()

const MASTER = (function(g){ // 선언부: 메게변수

  console.log(g); // 실제 있던 것처럼 사용 가능

  var x = 10;
  let uid = 'Ajttk753!@'

  return {  // 반환값
    getKey(){
      return uid;
    },
    setKey(value){
      uid = value;
    }
  };

})(window)  // 실행부: 인수. window

/* function aa() {
  var x = 10;
}
console.log(x) */ // var를 묶어준 이유

console.log(MASTER.setKey('새로운 비밀번호'));