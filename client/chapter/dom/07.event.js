/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

//$ 요즘은 defer 이용 : (DOM) html 의 파싱이 모두 끝난 후 스크립트 실행
// 예전
window.addEventListener('DOMContentLoaded', () => {

  const first = document.querySelector('.first');
  console.log( first );
})