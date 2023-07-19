/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

// 버블처럼 아래를 찍고 올라오는 event 작동 : Event bubbling
// 자기 자신만 선택하고 싶다면 어떻게 해야할까?

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


/* section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})

article.addEventListener('click',(e)=>{
  e.stopPropagation();
  console.log('%c article','color:dodgerblue');
})

p.addEventListener('click',(e)=>{
  e.stopPropagation();  // propagation : 번식. 전파
  console.log('%c p','color:hotpink');
}) */

// ^ 모달창 : 모달창 내부 버튼 누를시에 이벤트가 하위요소로 들어가서 바탕의 event 까지 인식 -> 버블링 방지 : e.stopPropagation 을 통해 모달창 내부만 동작할 수 있도록 설정 !


/* 캡처링 ----------------------------------------------------------------- */

// 순서가 거꾸로

section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
},true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation();
  console.log('%c article','color:dodgerblue');
},true)

p.addEventListener('click',(e)=>{
  // e.stopPropagation();  // propagation : 번식. 전파
  console.log('%c p','color:hotpink');
},true)