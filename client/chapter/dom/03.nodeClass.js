/* ------------------------------ */
/* DOM Node Class                 */
/* ------------------------------ */

// * browser는 자바스크립트 엔진을 내장하며, DOM, BOM 등을 만들 수 있다. '객체 생성' [figma 참고]

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공    * node.nodeType (1, 2, 3 ... 8)
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* ------------------------------------------------------------------------ */

//^ 어조객(어차피 조상은 객체)

//? EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.


//? Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.


//? Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


//? HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.   * 개개인별
// *              HTMLInputElement – <input> 요소에 대응하는 클래스
// *              HTMLBodyElement – <body> 요소에 대응하는 클래스
// *              HTMLAnchorElement – <a> 요소에 대응하는 클래스  * a 태그의 href


/* 노드 정보 ------------------------------------------------------------- */

const first = getNode('.first');

// - nodeType
console.log( first.nodeType );
console.log( first.nodeType === document.ELEMENT_NODE );
console.log( first.nodeType === 1 );

// - nodeName (vs. tagName)
console.log( first.nodeName === 'SPAN' ); //* 주석 등도 출력
console.log( first.tagName === 'SPAN' );  //* tag 일 경우에만 출력


/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// first.innerHTML = '<div>aa</div>' // 노드 접근 후 값 변경
// but. 'hellooooooooooooo'처럼 값을 입력할 경우 스크립트 태그로 들어가기 때문에 해킹(cross-site Scripting, XSS 해킹)의 위협
// 따라서, 텍스트 컨텐츠나 innerHTML ~~ 을 사용

// * 기존 내용 삭제
// first.innerHTML = ''

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += '<div>안녕!</div>'

// - textContent
console.log( first.textContent ='50% 파격세일' )  // getter
first.textContent // setter

// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출


/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

const h1 = getNode('h1');

// h1.hidden = true; // DOM 에서 제어 가능

/* h1.hidden = false;

let toggle = false;

setInterval(() => {
  h1.hidden = toggle? false:true;

  toggle = !toggle;
}, 1000) */


console.log(h1);