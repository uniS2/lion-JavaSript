/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

//? Document Object Model

/* 모든 노드에서 사용 */
// 크롬 개발자 도구 > 요소: 클릭 (span) : $0
// - parentNode : h1
// - childNodes : NodeList [text]
// - firstChild : "hello"
// - lastChild  : "hello"
// - previousSibling : #text
// - nextSibling : #text

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children : HTMLCollection(3) [h1, div, script]   * document.body.children
/*
for(let value of document.body.children){
    console.log(value)
}     => <h1>, <div>, <script> */

// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling   * $0.nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// const message = document.getElementById('message');  // 과거의 산물. 성능은 더 좋음

// - getElementsByTagName
// - getElementsByClassName

// const message = document.getElementById('message');
// const message = document.getElementsByClassName('first');

// document.querySelector('.first')

// console.log( message );

// message.textContent = 'aa'

//^ [영상강의] el, els

getNode('.first')   // <span class="first"></span>

const first = getNode('.first');

const span = getNodes('span');   // NodeList(2) [span.first, span.second]

const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log( first );
console.log( firstSpan );
console.log( secondSpan );

// - querySelector
// - querySelectorAll
// - closest

console.log(first.closest('h1'));  // event delegation. (first에서) 가장 인접한 대상(부모, h1)이 누군지를 반환

/* 문서 대상 확인 */
// - matches
console.log(first.matches('.first'));

//  선택자 안에 class | id 를 가지고 있는 대상이 있어?
console.log( first.matches('#message') );

// 선택자의 자식들 중에 해당 element가 있어?
console.log(first.contains(secondSpan) ); // .first, #message

// 클래스를 포함하고 있어?
// - contains
// node.classList.contains()
