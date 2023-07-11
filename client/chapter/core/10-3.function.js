/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // arguments
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  //rest parameter 매개변수로 인지시 모든 매개변수 -> 배열 ; ...ars ...children ; spread syntax를 내부에서 사용 -> rest parameter
  // (a, b, ...args) 시 200, 2000인 나머지만 가지고 온다. 따라서, rest 나머지 parameter

  // console.log( args )  // 화살표 함수는 arguments를 가지지 않는다!!!! 대신 ...args

  /*   let total = 0;
  args.forEach((item)=> {
    total += item;

  }) */

  /*   return args.reduce(function(acc, item){
    return acc + item;
  },0) */

  // 기본값 0이면 생략 가능하나 명시 해주는게 좋다
  // =>  =  { return }
  return args.reduce((acc, item) => acc + item, 0);

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);

// console.log( result );

function button() {
  // Button 과 기능이 다름
}

// const a = Button()   // 값을 리턴.
const b = new Button(); // 함수는 양면의 얼굴 (두가지 기능): 객체 생성(생성자 함수). 함수를 통해서 b에는 객체가 담김 {} => 내부적으로 construcor 가지고 있기 때문(일반 함수, 함수 표현식). arrow Function 일 못한다고 파업 => only 함수의 기능
const c = new String('a'); // 생성자 통해 만들어진 아이들은 모두 객체. // c.toString()

//* 새로운 내용
// Document.querySelector() : 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환
const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button'); // NodeList(4) [button, button, button, button]

//? 일반함수 : 나를 호출한 대상을 this로 바인딩합니다. (함수선언문, 함수표현식)
//? 화살표함수 : this를 바인딩하지 않음. 찾아야 한다면 내 부모(상위 컨텍스트)꺼 가져옴.

/* a.addEventListener('click',(e)=>{
  // e.currentTarget
  // this.classList.add('is-active');
  // console.log(this);
}) */

/* a.addEventListener('click', function(){  //* arrow(this 바인딩 하지 않음. 찾지 않음)로 바꾸면 window. classList는 DOM 속성이므로 실행되지 않음.
  a.classList.add('is-ative');  //* 하나씩 밖에 안됨. a=this로 바꾸어서 호출가능
}) */

console.log(nav); //* Nodelist: 유사배열, forEach문 사용 가능

/* nav.forEach((button)=>{
  button.addEventListener('click', function(){
    // console.log(this);  // ! this 나를 선택한 대상
    this.classList.add('is-active');  //* this 자체가 누르는 대상 자체를 수집해 온다. : is-active를 실행한 function -> button -> this
  }) */

nav.forEach((button) => {
  button.addEventListener('click', () => {
    // console.log(this);  //* this? 부모 = window
    this.classList.add('is-active');
  });
});

// 화살표 함수와 this

// this를 왜 쓰는지, 어떻게 찾아야하는가

//* 함수 선언문과 함수 표현식이 일반 함수
//? 함수선언문
function normalFunction() {
  // dir() 내부 내용 확인 가능
  // console.log(this);
}

window.normalFunction(); // 전역 오염중 -> normalFunction을 누가? window가 호출

//?함수표현식
const expressionFunction = function () {
  // console.log(this);
};

//?화살표함수식
// 함수로서의 기능만 하기 때문에 성능적으로도 훨씬 가볍다
// 오로지 함수만을 위한 기능을 가지고 있다.
const arrowFunction = () => {
  // console.log(this);  // 내 부모의 값을 찾아서 적용 - window
};

arrowFunction(); // 그냥 자기 자신 호출. 나 this 바인딩 하지 않는데? 부모 누구여? window 전역. 호출!

//? 객체 안에서 this : *객체지향프로그래밍. 함수지향프로그래밍

//? 객체 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가요? yes (this를 더 찾기 쉬우므로)
//? 메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋은가? yes

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중량구 면목동',
  grades: [80, 90, 100],
  totalGrades() {
    //? :function(). 줄여쓰는것 또한 일반함수!
    // console.log(this.grades);  //? user.totalGrades()시 객체 출력. this = user
    /* this.grades.forEach((item)=>{ // ? forEach(window에서 내려오는 정해지는 함수: window 자체가 바인딩) 안에서 callback 함수. 즉, 지금 this를 아예 못찾아서 window를 수집해오는중 -> undefined. => arrow로 바꾸기: 상위 컨텐스트 totalGrades 함수에서 this를 찾는다! 즉, 함수 실행 컨텍스트 생성
      console.log(this.total);
      // this.total += item;
    }) */
    // console.log(this.total);
    // ? this = user

    const sayHi = () => {
      console.log(this);
    };

    sayHi(); //? 알아서 호출. window 가짐. 일반함수는 호출 대상에 따라 this가 달라짐
    // console.log( this.total)

    /* totalGrades: () => {  
    console.log(this.grades); */ //! 이 아이의 부모는? user는 this를 가지고 있지 않다.(생성X) - this를 바인딩 하지 않음 => arrow function은 상위 컨텐스트
    //? 글로벌환경: 엔진이 만듦. 함수환경 안에서도 this 생성. 객체는 실행 컨텍스트를 만들어 주지 않는다. => 따라서 전역실행환경인 글로벌 컨텍스트의 this를 데려온다.
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
