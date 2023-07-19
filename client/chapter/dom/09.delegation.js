/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

/* const buttonA = getNode('.a');
// 개별 event 처리
buttonA.addEventListner('click', () => {
  console.log('hit')
}) */

// querySelectAll - event 처리
/* const buttons = getNodes('button');

buttons.forEach((item) => {
  item.addEventListner('click', () => {
    console.log('hit')
  })
}) */

// ? 1. 부모에게 event를 건다
// ? 2. 하위요소 event 한 번에 처리
// * [상호님] 이벤트 리스너는 생성시 리소스를 소모 (일반 함수 등도 같음). 예를 들어 click이 많은 UI의 경우 event 를 관리하기 어려움. 따라서, 부모에게 이벤트를 건 후 자식에게 event 각각 설정 = Event delegation

const container = getNode('.container');

// 이론 - 연습
/* function handleDelegation(e) { // ^ event 객체는 브라우저가 생성
  // console.log('이벤트 위임');
  // console.log(e.currentTarget); // ^ 일반function을 부른 값 = 이벤트가 걸린 대상 / arrow :this를 찾지 못하므로 (window, undefined) currentTarget을 통해 찾을 수 있다.

  let target = e.target;
  // target.getAttribute('class') // DOM 프로퍼티: 속성값을 가져옴
  // let className = attr(target, 'class');
  // let dataName = attr(target, 'data-name');  // me
  let dataName = target.dataset.name; // 사용자 정의 속성(비표준)이기 때문에 dataset 이용 가능

  /*   if (className === 'a') {
    console.log('A 버튼 클릭!');
  }

  if (className === 'b') {
    console.log('B 버튼 클릭!');
  }

  if (className === 'c') {
    console.log('C 버튼 클릭!');
  }

  if (className === 'd') {
    console.log('D 버튼 클릭!');
  } */

  /* switch (dataName) {
    case 'A':
      console.log('A 버튼 클릭!');
      break;

    case 'B':
      console.log('B 버튼 클릭!');
      break;

    case 'C':
      console.log('C 버튼 클릭!');
      break;

    case 'D':
      console.log('D 버튼 클릭!');
      break;
  } */
// } */

function handleDelegation (e){
  let target = e.target;  // 누른 첫번째 대상을 가져옴 - 태그마다 다름
  
  let li = target.closest('li');  // (누른 대상) 가장 인접한 부모를 찾아줌. 부모에 li가 없으면 null

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  // console.log(target); // span, button 요소에 따라 달라짐

 if(className === 'home' || className === 'about' || className === 'project' || className === 'contact'){
  console.log("홈 실행!")
 }


}

// ^ currentTarget : 이벤트가 걸린 대상 = 이벤트를 발생시킨 대상. 일반함수일 경우 === this
// ^ target: currentTarget 과 달리 자신이 누른 대상을 수집 = 마우스 커서가 제일 처음 만나는 대상

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
