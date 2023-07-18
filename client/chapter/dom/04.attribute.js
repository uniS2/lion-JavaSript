/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// * 브라우저는 HTML 태그를 해석(parsing)해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// * 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// * 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다. (비표준인 경우)
// * HTML 속성 값은 항상 문자열입니다.
// ^ 태그 <body id="page">가 있을 때, DOM 객체에서 body.id="page"를 사용할 수 있는 것 같이
// ^ HTML에서 정의한 표준 속성 / 자바스크립트에서 사용하는 DOM 객체의 프로퍼티. 표준이라면 접근할 수 있는 값   *dir(document.body -> body)

class aa {}

const first = getNode('.first');

console.dir(first.id); // message
console.dir(first.className); // class 생성자 중복 방지

console.log(first.size); //^ 표준 속성이 아니라 인식하여 DOM에 매핑되지 않는다. = 프로퍼티로 사용할 수 없다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// * DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// ^ 비표준 속성도 접근 가능
console.log(first.hasAttribute('title')); // Boolean 값 반환
console.log(first.getAttribute('size')); // 속성값

// ^ first.setAttribute('class', 'second") 처럼 기존속성을 변경하기 때문에 class는 classList 접근해서 제거(remove) 또는 추가(add) 하는 경우가 많다.
// first.setAttribute('title',''); // set.
first.removeAttribute('title');
console.log(first.attributes); // 객체. Symbol(Symbol.iterator) -> 순환 가능
for (let value of first.attributes) {
  console.log(value);
}

first.getAttribute('id'); // message

// ^ 생성부
function getAttr(node, prop) {
  // * 0. 넘어온 대상이 문자인지를 체크
  // * 1. 체크 후 element node 로 변경해 줘야함..!

  // const node = '.first' // ^ 메모리에 저장
  // const prop = 'id'

  // '.first'.getAttribute('id')  // ^ 에러 -> node validation 처리

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new Error('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  // * 1. setAttr 에 prop 추가. 비표준 -> 표준.  first.dataset.animation = 'paused'
  // * 2. class의 경우 data-class 로 나타내지 않기 위해 조건 처리
  if (!(node[prop]) && prop !== 'class' && prop !== 'title'){
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value); // ^ 반환값이 필요없는 경우이기 때문에 return 은 사실상 필요가 없다.
}

//^ 선언부
getAttr('.first', 'id'); // 함수. function. 상자 함, 셈 수.
// setAttr('.first', 'class', 'second');
console.log(first);


// * 제이쿼리 처럼 처리
// ? 작은 함수를 만들고 보다 큰 함수로
/* function attr(node, prop, value){
  
  // if(!value){
  //   return getAttr(node, prop);  // first
  // } else {
  //   setAttr(node, prop, value);
  // }

  !value ? getAttr(node,prop) : setAttr(node, prop, value);
} */

// const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value);


attr('.first', 'class') // getter
attr('.first', 'class', 'second') // setter


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// * data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// * data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

// console.log( first.dataset ); // 카멜케이스
// console.log( first.dataset.tabIndex );  // getter. DOM 스트링을 자동으로 생성.
// console.log( first.dataset.animation = 'paused' );   // setter
