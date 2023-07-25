import {
  diceAnimation,
  attr,
  getNode,
  getNodes,
  insertLast,
  endScroll,
  clearContents,
  memo,
} from './lib/index.js';

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록.
// 3. 토글시 애니메이션 재생/정지
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hiidden 속성
//      .- 기록 버튼 이벤트 바인딩
//      .- hidden 속성 false 만들기
//      .- 초기화 버튼 이벤트 바인딩
//      .- hidden 속성 true 만들기
// 3. 주사위 값을 가져와서 렌더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기


//# clear: 진짜 진짜 쉬운 과제
// 1. disableElement(node)
const disableElement = (node) => (node.disabled = true);
// 2. enableElement(node)
const enableElement = (node) => (node.disabled = false);
// 3. isDisableState(node) => true / false
const isDisableState = (node) => {
  return node.disabled === true ? true : false;
}

// 1. visibleElement(node)
const visibleElement = (node) => (node.hidden = false);
// 2. invisivleElement(node)
const invisibleElement = (node) => (node.hidden = true);
// 3. isVisibleState(node) => true / false (hidden true, false)
const isVisibleState = (node) => {
  return (node.hidden === false) ? true : false;
}

let count = 0;
let total = 0;

// 2-3. 주사위 값을 가져와서 렌더링
// 생성
function createItem(value) {
  // 뿌려줄 템플릿 만들기
  return /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

// render
function renderRecordItem() {
  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr(memo('cube'), 'data-dice');

  insertLast('memo(@tbody)', createItem(diceValue));

  endScroll(recordListWrapper);
}

// 이벤트 위임, nth-child, children, 배열 구조 분해 할당 [a, b, c]
// const buttonList = getNodes(".buttonGroup > button")
// const buttonRoll = buttonList[0];

const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList tbody');

// ^ memo setter, getter
memo('@tbody', ()=>getNode('.recordList tbody'))
memo('@tbody')  // ^ memo(@tbody)로 변수로 사용. 실제 태그 이름이랑 구분짓기 위해 @ 사용

//$ 1-4. IIFE (즉시 실행 함수 표현)
const handleRollingDice = ((e) => {
  let isClicked = false;
  let stopAnimation;

  //$ 1-3. 토글시 애니메이션 재생/정지
  return () => {
    if (!isClicked) {
      // 주사위 play
      stopAnimation = setInterval(diceAnimation, 100); // 실행 & 고유한 id 반환
      // 2-1. 주사위가 멈추면 기록/초기화 버튼 활성화
      disableElement(recordButton); //* disabled : DOM의 프로퍼티 중 하나
      disableElement(resetButton);
    } else {
      // 주사위 stop
      clearInterval(stopAnimation);
      // 2-1. 주사위가 멈추면 기록/초기화 버튼 활성화
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isClicked = !isClicked;
  };
})();

// 회차 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total 값이 나올 수 있도록

function handleRecord() {
  visibleElement(recordListWrapper);
  // recordListWrapper.hidden = false;

  // 큐브의 data-dice 값만 가져오기
  // const diceValue = +attr('#cube', 'data-dice'); // 문자열 반환

  renderRecordItem();

  // endScroll(getNode('html'));
}

function handleReset() {
  invisibleElement(recordListWrapper);
  // recordListWrapper.hidden = true;
  disableElement(recordButton);
  disableElement(resetButton);

  clearContents('memo(@tbody)');

  count = 0;
  total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);

// . ?의 역할 : DOM을 못찾았을 때 오류를 방지
