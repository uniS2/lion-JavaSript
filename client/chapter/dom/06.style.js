/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log( first.className = 'box second' );  //setter
console.log( first.className ); // getter. 클래스이름은 문자열
// console.log( first.className = 'second' );  //setter. 덮어씌움



// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// first.classList

// add
// remove
// toggle
// contains

addClass(first, 'hello');
// first.classList.add('hello');
first.classList.remove('hello');  // 빈문자, 띄어쓰기 등 에러 => 정확한 대상 입력하기
first.classList.toggle('is-active');  // Boolean 값 반환
console.log( first.classList.contains('is-active') );


addClass('.first', 'hello');


// ? 여러 개의 class name 제거하기
// first.className = '';
// attr(first, 'class', '');




/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // ^ setter. 자바스크립트 프로퍼티를 통해 'orange' 값을 설정해주었기 때문에 가져올 수 있음
// console.log( first.style.fontSize );  // ^ getter - 입력값이 빈 문자열로 나옴
// ^ DOM 객체가 읽은 후에 반환 - 그러나 현재 아직 입히지 않았으므로 가져올 수 없음!

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
// ^ 개발자 도구 - Computed
// * getter 시에 이용할 것

console.log( getComputedStyle(first).fontSize );
console.log( getComputedStyle(first).getPropertyValue('font-size') );


setCss('.first', 'color', '#fff');

console.log( css('.first', 'background-color', 'red') );