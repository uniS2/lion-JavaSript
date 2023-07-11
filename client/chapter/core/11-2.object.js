/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message; // 원시값을 담았기 때문에 주소가 각각 다름

text = '멋쟁이 사자처럼 6기'; //. != message

let conversationTool = messenger; // 참조에 대해 복사를 한 경우

// delete conversationTool.name; // messenger에 변화 동일 => 원본 손실

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
//? 1. for ~ in 문을 사용한 복사

// 얕은복사
const cloneObject = {};

for (const key in messenger) {
  cloneObject[key] = messenger[key];
}

//? 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);
/* copyObject.name = 'instagram'
copyObject  // {name: 'instagram', manufacture: 'kakao'}
messenger // {name: 'kakao talk', manufacture: 'kakao'} */

//? 3. 전개 연산자(...)를 사용한 복사
const spreadObject = { ...messenger }; //😶‍🌫️끝

//? 4. 객체를 복사해주는 유틸 함수
//* prettiere ()생략 여부 설정
//* 카피드오브젝트라는 함수는 오브젝트를 매개변수로 받고 오브젝트의 어싸인을 통해서 전달받은 오브젝트를 복사해서 값을 반환하는 함수다.
const copyObj = (object) => Object.assign({}, object);

/* function copyObj(object){
  return Object.assign({},object);
} */

copyObj(messenger);


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

//? 같은 속성의 값이 있을 경우 뒤의 같에 의해 덮어씌어진다
//? 기존값, 새로 주고 싶은 값
let combinedCssMap = {...cssMapA, ...cssMapB};
//? let ~ = Object.assign({}, cssMapA, cssMapB)  합성 후 새로운 객체


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

//? 뎁스 2
let copyedContainerStyles = cloneDeep(containerStyles); // {...containerStyles}

// 1. 깊은 복사 유틸리티 함수   재귀 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
