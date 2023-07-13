/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength)

//^ Symbol iterator이 내장되어 있어 추출가능
// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter)


// 문자열 중간 글자를 바꾸는 건 불가능 
//? (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출 = 배열에도 있는 능력
let slice = message.slice(8, -1);
console.log('slice : ', slice)

let subString = message.substring(1, 3);
console.log('subString : ', subString)

let subStr = message.substr(1, 3);  //^ 레거시. (start, count)
console.log('subStr : ', subStr)


//? 문자열 포함 여부 확인
let indexOf = message.indexOf('i');
console.log('indexOf: ', indexOf) //* -1 = 없다, 있다면 위치 반환
//* if(message.indexOf('p')) 조건 설정

let lastIndexOf = message.lastIndexOf('s'); //? 뒤에서부터 순환. 문자열 조회
//% 같은 문자 있을 경우 맨 뒤의 자리 반환
console.log('lastIndexOf: ', lastIndexOf);

let includes = message.includes('less');
console.log('includes: ', includes);

let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('more.');
console.log('endsWith: ', endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();  // trimStart()
let trimRight;  // trimEnd()
//? [슬비쌤] Left/Right가 언어에 따라 가로로 기술하는 언어는 문제가 없지만 아랍어처럼 세로로 기술하는 언어는 왼쪽 오른쪽이라는 개념이 맞지 않아요 그래서 접근성 관련해서도 방향보다 시작.종료로 구분하는 형태로 바뀌고 있어요!

let str = '    a b cde  as dq    '

//^ 메서드를 두번 호출해야 하므로 불편
// console.log(str.split(' ').join(''));

//^ 정규식 이용: g 전체를 다 찾는다.
/* replace의 인자1(대체될 문자)은 아래와 같고
/ : 정규표현식으로
\s : 스페이스를
* /g    :전체에서 찾
replace의 알규먼트 2(대체할 문자)는 아래와 같다
,''      : 빈문자 */

console.log( normalText(str) ); // str.replace(/\s*/g, '')

function normalText(string){
  return string.replace(/\s*/g,'');
}

let trim = str.trim();
console.log('trim: ', trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat: ', repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
//? (\s|-|_)+. : 여기서 . 은 앞에 찾은 단어의 뒤에 단어를 의미. replace는 callback 함수 받을 수 있다.
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1); //^ 1번째부터 복사
}

// let toCamelCase;

// let toPascalCase;