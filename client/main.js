import { jujeobData } from './data/data.js';
import { showAlert } from './lib/dom/showAlert.js';
import {
  addClass,
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  shake,
} from './lib/index.js';
// import { getNode, clearContents } from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujueb 데이터 가져오기
// 4. jujeob에서 랜덤한 주접 한개를 가져와야함.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리 replace => regEXP (정규표현식)
// 3. 숫자형 문자를 받았을 때 (e.g 123, 기안84)

// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현 (greensock 라이브러리 사용)
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩

// const container = getNode('.container');
const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value; // 1-2. nameField 값 가져오기: 입력한 값
  const list = jujeobData(name); // 2-1. 2-2. replace => regEXP (정규표현식)
  const pick = list[getRandom(list.length)]; // 1-4. jujeob에서 랜덤한 주접 한개

  if (!name || name.replace(/\s*/g, '') === '') {
    // throw new ReferenceError ("nameField의 input 값에는 값을 입력해야합니다.")
    showAlert('.alert-error', '이름을 입력 해주세요!!', 2000); // 3-1. 3-2. 사용자에게 알려주기, 재사용 가능한 함수

    shake.restart(); // 3-3. gsap 라이브러리

    return;
  }
  // 숫자거나 NaN이거나 똑같은 값 반환
  if (!isNumericString(name)) {
    // 2-3. isNaN
    showAlert('.alert-error', '제대로된 이름을 입력 해주세요!!', 2000); // 3-1. 사용자에게 알려주기

    shake.restart();  // play -> end : 다시 play가 말이 안됨

    return;
  }

  // resultArea?.textContent = '';
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// le state = false;

// state = true;

// if(state){  ...logic }

function handleCopy() {
  const text = resultArea.textContent;

  //! main.js:65 Uncaught TypeError: Cannot read properties of undefined (reading 'writeText') at HTMLDivElement.handleCopy (main.js:65:23)
  // 클립보드 복사가 완료 되었다면, 그 때 alert를 띄어야함. promise
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!'); // BOM : navigator
  });
}

submit.addEventListener('click', handleSubmit); // 1-1. 핸들러 연결
resultArea.addEventListener('click', handleCopy); // 4-1. 클릭이벤트 바인딩
