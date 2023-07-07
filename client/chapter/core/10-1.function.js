/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function convertNumber(price) {
  if (typeof price === 'string') {
    throw new Error(
      'calcSumPrice 함수의 매개변수는 숫자를 입력해야 합니다.'
    );
  }
}

// 함수 선언
function calcSumPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // priceC ||= 0;  // 세번째 방법
  // priceC ??= 10;  // 네번째 방법

  // if(!priceC) priceC = 0;  // 두번째 방법

  /* // 첫번째 방법
  if(typeof priceC === 'undefined'){
    priceC = 0;
  } */

  if (!priceA || !priceB) {
    throw new Error(
      'calcSumPrice 함수의 첫 번째와 두 번째 매개변수는 필수 입력 값 입니다.'
    );
  }

  // 사용자가 인자를 문자로 입력시 에러도 원래 써주어야함..!!!!
  convertNumber(priceA);
  convertNumber(priceB);
  convertNumber(priceC);
  convertNumber(priceD);

  return priceA + priceB + priceC + priceD;
}

const result = calcSumPrice(10, 30); // 함수 호출

console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  // me: parseInt 메서드를 적용할 때와 아닐 때를 나누는 것이 중요!! 또한, parseInt는 무조건 10진수로 반환되지 않으므로 명시해줄 것
  // let value = parseInt(pxValue) / base;

  /* if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10);
  } */

  if (typeof base !== 'number') {
    throw new Error('rem 함수의 두 번째 매개변수는 숫자를 입력해야합니다');
  }
  if (!pxValue)
    throw new encodeURIComponent(
      'rem 함수의 첫 번째 인수는 필수 입력 값 입니다.'
    );

  typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));

  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue, 10);
  // }

  return `${pxValue / base}rem`;
}

rem('30px');

/* 
1. function name
2. validation
3. return value
4. parameter, argument
5. test [Test Driven Development]
*/

console.assert(rem(20) === '1.25rem');
console.assert(rem('30px', 16) === '1.875rem');

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
