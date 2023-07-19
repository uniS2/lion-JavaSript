/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler : 하나의 요소에 이벤트를 동시에 걸 수 없다.
// 3. 메서드 : element.addEventListener(event, handler[, phase]) : 3번을 가장 많이 쓴다.


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

//$ 요즘은 defer 이용 : (DOM) html 의 파싱이 모두 끝난 후 스크립트 실행
// 예전
/* window.addEventListener('DOMContentLoaded', () => {

  const first = document.querySelector('.first');
  console.log( first );
}) */


/* DOM 프로퍼티 이벤트 잘 사용안하는 이유 다시알려주실수 있나요
DOM 프로퍼티 와 HTML 속성 이벤트는 하나만 작동하기때문에 잘 사용하지 않는다 */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');



function handler(){
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}
// first.onclick = handler;




// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click',handleClick);

// const remove = bindEvent('.first','click',handleClick);
// setTimeout(() => {
//   remove()
// }, 3000);

// bindEvent('.first', 'click' , handler);
// first.addEventListener('click',handleClick);


// ? 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸드러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClick(e){  // ent, evt

  // console.log( e );

  // console.log( e.target, e.offsetY ); //  this === e.target, offsetX, offsetY (좌표값 조회)

  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;

}

ground.addEventListener('click',handleClick);


// 지금은 현재 DOM 처리 : 추가가 많아질 시 부하가 걸림 -> canvas 태그 하나만을 통해 처리

// ^ throttle, debounce
function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


// throttle : 특정시간마다 (1초) 함수를 실행 -> event를 일정시간마다 호출
// debounce : 사용자가 동작 중일때는 함수를 실행하지 않는다. event가 동작을 멈추면 호출한다. -> event를 일정시간이 지난 후 호출하는 형태
ground.addEventListener('mousemove', debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😿</div>
  `

  insertLast(ground, template);
}))