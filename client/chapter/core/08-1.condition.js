/* ---------------- */
/* Condition        */
/* ---------------- */

/* 
if("0"){
  console.log('이 조건은 항상 실행됩니다.');
} else{
  console.log('조건에 부합하지 않습니다')
}
 */

// 조건부 연산자

/* 
자바스크립트의 공식 이름
중요도 : 2
if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.

사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.----------- */

/* let answer = prompt(`"자바스크립트"의 '공식' 이름은 무엇일까요?`, '').toLowerCase();

// if (answer === 'ECMAScript'){
//   console.log('정답입니다!');
// } else {
//   console.log('모르셨나요? 정답은 ECMAScript입니다!');
// }

let result = (answer === 'ecmascript') ? '정답입니다!' : '모르셨나요? 정답은 ECMAScript입니다!';

console.log(result); */


/* 
입력받은 숫자의 부호 표시하기
중요도 : 2
if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

입력받은 숫자가 0보다 큰 경우 1을 출력
입력받은 숫자가 0보다 작은 경우 -1을 출력
입력받은 숫자가 0인 경우 0을 출력
(사용자는 항상 숫자를 입력한다고 가정) ----------------------*/

/* let answer = prompt('숫자를 입력해주세요', 0);

if (answer > 0) {
  console.log(1);
} else if (answer < 0) {
  console.log(-1);
} else {
  console.log(0);
} */


/* 
'if'를 '?'로 교체하기
중요도: 5
조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
} -------------------------------------------------------------- */

/* let result = (a + b < 4) ? '미만' : '이상';
console.log(result); */


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?');

// 영화 볼거니?
// let goingToWatchMovie = 'yes';


if (!didWatchMovie){
  let movie = confirm('영화 볼거니?');

  if(movie){
    let withWho = prompt('누구랑 볼거니?', '');

    if(withWho === '남자친구'){
      console.log('zZz');
    } else if(withWho === '가족'){
      console.log('화목하네');
    } else {
      console.log('재밌게보구와 ~~~~~~~~~');
    }
   /*  console.log(`${withWho}랑 보는구나`);
  }else{
    console.log('그뢩...'); */
  }

} else {
  let alone = confirm('너 혼자 봤니?');

  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('너..찌질했네..');
    }else{
      console.log('너 T야?');
    }

  }
}

// 멀티 조건부 연산자 식


/* // 조건문을 쓸 수는 없다! 값을 반환하지 않으므로! 따라서 상함 연산자를 사용하여 일처리

// 순수 JavaScript

function render(node, isActive) {

  let template = `
    <div>${isActive ? <b></b> : null}</div>
  `

  node.insertAdjecentHTML('beforeend', template);

}

render(body)


// React. 조건부 랜더링

function Button({color, name, isActive}){

  return(
    <div style={{color}} >
      {isActive ? <b></b> : null}
    </div>
  )

} */