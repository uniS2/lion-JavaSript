/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
// ? css in js (heavy) < 성능적인 면에서 sass, tailwind가 낫다
let cssMap = {
  position: 'fixed',
  'z-index': 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  'max-width': '800px',
  height: '40vh',
  'min-height': '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'user-id-skladjfdkfjls',
  name: 'song',
  email: 'song@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['permission']);
// console.log(authUser['email']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

//? class로 객체 - 객체지향 new Object()
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

//? 함수로 객체 만들기 - 함수 지향 (내는 경우가 많다)
// ? 함수는 값을 리턴 및 변수에 담아서 쓸 수 있다.

//?? shorthand property (단축 프로퍼티)
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  //? 하는 이유? user의 정보를 매번 입력할 수 없음!
  //? user의 정보를 담아 정보를 생성할 수 있는 객체를 리턴
  return {
    name, //? 이 객체의 key를 정의. 이 키에 대한 value만 매개변수에서 가져온다.  ?? name: name
    email,
    [computedProp]: number, //? 기능을 이용. 이 key 또한 데려오고 싶으면 [] 표시  ?? email: email,
  };
}

const user1 = createUser('송', 'song@gmail.com', 'tel', '010-1234-5678');

// const user2 = createUser('힁', 'hee@naver.com');

// 프로퍼티 포함 여부 확인

//  key in user1  // 모든 요소를 다 찾아버림

// Object.prototype.SIGN = true;

for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열 만들어주세요 Object.keys()

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

console.log(keyArray);
console.log(valueArray);

// * 연습
// getProp(object)
function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다.');
  }
  return Object.keys(object);
}

// ? Object.key와 같은 능력이 없다면
function getProperty(object) {
  let result = [];

  for (let key in object) {
    if (({}).hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

// console.log(getProp(authUser)); // ['uid', 'name', 'email', 'isSignIn', 'permission']

//?          null(쓰레기통)   없앰.(아예)
//? 프로퍼티 제거(remove) or 삭제(delete)

// authUser.name = null; // 제거

// delete authUser.uid // 삭제
// console.log( authUser );

/* authUser = {
  uid: 'user-id-skladjfdkfjls',
  name: 'song',
  email: 'song@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
}; */


function removeProperty(object, key) {
  if (typeof object !== 'object') {
    throw new Error('....');
  }

  if (typeof key !== 'string') {
    throw new Error('....');
  }

  // key에 'all'을 입력하면 모두 제거
  if (key === 'all') {
    for (let key of getProp(object)) {
      // Object.keys
      object[key] = null;
    }
    return object;
  }

  object[key] = null; //? 계산된 값이 들어갈 때는 []만 가능

  return object;
}

console.log( removeProperty(authUser, 'all'))

function deleteProperty(object, key) {
  if (typeof object !== 'object') {
    throw new Error(
      'deleteProperty 함수의 object 매개변수에는 객체만 입력할 수 있습니다.'
    );
  }

  if (typeof key !== 'string') {
    throw new Error(
      'deleteProperty 함수의 object 매개변수에는 문자만 입력할 수 있습니다.'
    );
  }
  if (isEmptyObject(object)) {
    return;
  }
  delete object[key]; //? static 아닌 dynamic으로 게산하는 값을 받아올때 []만 가능!

  return object;
}

// 함수의 실행부
deleteProperty(authUser, 'name');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

// console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return getProp(object).length === 0 ? true : false;
  // return !(Object.keys(object).length)
}

// console.log(isEmptyObject(authUser)); // false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//? 배열의 구조분해할당 : 순서가 정해져있다.(의미) 변수 이름을 바꿀수 있다.

//? 객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까? yes
//* 키의 이름이 같아야 "객체 구조분해 할당"
//* 객체의 구조분해 할당은 key의 이름을 변수명으로, value를 변수 값으로 선언&할당 하는 것

let color = ['#ff0000', '#2b00ff', '00ff2f'];

let [, , g] = color;

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let key = keyValue[1];
  console.log(key);
}

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(g);

/* const [a,b,c,d] = document.querySelectorAll('nav li button'); //buttons

a.addEventListener('click', ()=>{})
b.addEventListener('click', ()=>{})
c.addEventListener('click', ()=>{})
d.addEventListener('click', ()=>{}) */

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

//? 객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까? yes
//* 키의 이름이 같아야 "객체 구조분해 할당"
//* 객체의 구조분해 할당은 key의 이름을 변수명으로, value를 변수 값으로 선언&할당 하는 것

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

// const 권혜미 = salaries.권혜미
// const 이수연 = salaries.이수연
// const 강예나 = salaries.강예나
// const 김태일 = salaries.김태일

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;  //# alias. 별칭 사용가능. 권혜미는 이제 애초에 정의가 안된 <- 사용 불가능

// console.log(권혜미);

function setElementCss(options) { //* 변수 이름 변경가능. 초기값 할당
  // 객체 자체를 디폴트로 설정하는 값도 있음

  const {
    width:w =100,
     height:h=10,
     overflow ='',
     color:c = '#fff'
    } = options;  // = {} : 객체 자체를 디폴트 값으로
  // const { width, height, overflow, color } = options
  console.log(w, c); //* options.width 붙일 필요 없이 바로 사용. 단, 별칭만 가능
}

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange',
};

//? 매개변수가 많아질수록 불편 -> 이를 객체로 넘겨주기.
//? 순서 상관없이 사용할 수 있어 편리
// setElementCss(defaults)

setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
  width: 50,
});