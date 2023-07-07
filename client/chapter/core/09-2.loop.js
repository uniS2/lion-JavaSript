/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* let i = 0;

do {
  if (i === 0) {
    console.log('최초실행');
  } else {
    console.log(`${i}번째 실행`);
  }

  i++;
} while (i < 10); */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

/* let repeat = prompt('몇번 반복하시겠습니까?', 0);

do {
  if (repeat >= 0) {
    console.log(`${repeat}번째 실행`);
  } else {
    console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
    break;
  }
  repeat--;
} while (repeat);
 */

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first'); // css 셀렉터와 동일. HTML 코드를 가져올 수 있는 요소 [DOM]
// let second = document.querySelector('.second');

// first = first.nextSibling.nextSibling.nextSibling.nextSibling;

/* do {
  first = first.nextSibling;
} while (first.nodeType !== document.ELEMENT_NODE);

// 반복문 멈추는 시점 -> 무한루프

console.log(first); */

function next(node) {   // 재사용성
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1)   // 다음 태그 요소 찾기

  return node;
}

const second = next(first);
console.log(second);


// const div = next(heading);
// console.log(div);

function prev(node) {
  do {
    node = node.previousSibling;
  }while (node.nodeType !== 1)

  return node;
}

console.log(prev(second));

// 로직 실행
