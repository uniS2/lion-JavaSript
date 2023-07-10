/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  // arguments
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => { //rest parameter 매개변수로 인지시 모든 매개변수 -> 배열 ; ...ars ...children ; spread syntax를 내부에서 사용 -> rest parameter
  // (a, b, ...args) 시 200, 2000인 나머지만 가지고 온다. 따라서, rest 나머지 parameter

  console.log( args )  // 화살표 함수는 arguments를 가지지 않는다!!!! 대신 ...args

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

const result= calcAllMoney(1000,500,200,2000);

// console.log( result );

function button() { // Button 과 기능이 다름

}

const a = Button()   // 값을 리턴.
const b = new Button()  // 함수는 양면의 얼굴 (두가지 기능): 객체 생성(생성자 함수). 함수를 통해서 b에는 객체가 담김 {} => 내부적으로 construcor 가지고 있기 때문(일반 함수, 함수 표현식). arrow Function 일 못한다고 파업 => only 함수의 기능
const c = new String('a')  // 생성자 통해 만들어진 아이들은 모두 객체. // c.toString()


// 화살표 함수와 this

// 함수선언문
function normalFunction(){  // dir() 내부 내용 확인 가능
  console.log(this);
}

window.normalFunction() // 전역 오염중 -> normalFunction을 누가? window가 호출

// 함수표현식
const expressionFunction = function(){
  console.log(this);
}

// 화살표함수식
// 함수로서의 기능만 하기 때문에 성능적으로도 훨씬 가볍다
// 오로지 함수만을 위한 기능을 가지고 있다.
const arrowFunction = () => {
  console.log(this);  // 내 부모의 값을 찾아서 적용 - window
}

arrowFunction()  // 그냥 자기 자신 호출. 나 this 바인딩 하지 않는데? 부모 누구여? window 전역. 호출!


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 