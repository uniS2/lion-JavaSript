/* -------------------------------------------------------------------------- */
/* 클로저(Closures)                                                             */
/* -------------------------------------------------------------------------- */

//? 클로저 (closure) 란?

//? 전역의 오염을 막기 위해 ✨
//? 값을 기억하기 위해 (가비지 컬렉터 수집 X)
//? 함부로 내가 설정한 값을 수정할 수 없게 (특정 함수를 통해서만 접근)

// - JavaScript의 매우 강력한 특성으로 독립적인 변수를 참조하는 함수를 말합니다.
//?  즉, 클로저에 정의된 함수는 그것이 작성된 환경을 '기억'합니다.

//^ 클로저가 필요한 이유
/* let count = 0;  //^ 2. 바깥 변수 참조(렉시컬 환경) but. 전역 오염중!

function counter () {
  // let count = 0;  //^ 1. 내부에 정의시 가비지컬렉터-초기화 반복 => 바깥으로 옮기기

  count++;

  return count;
}

counter() */


//^ 클로저의 배경
//? 함수는 본인이 태어난 환경을 기억합니다. - 내부에서 외부로 접근가능!
/* function first() {
  let x = 10;

  function second() {
    let y = 5;

    return x + y; //* 함수는 태어난 환경을 기억하고 있어 외부 변수 참조 가능
  }

  return second; //^2. second() 함수 본문을 그래도 넘긴다.
  //* 1. return second() : second() 함수를 실행을 하여야 반환값을 얻을 수 있으므로 return을 통해 값을 받아줌
} */

// first(); // 15

//^ currying function. 뒤의 함수는 second()
// first()() // 15

//^ second 함수를 value 변수에 할당 (함수는 "값"처럼 사용가능). value() 를 통해 실행
//^ closure
const value = first(); //^ second 본문을 넘김, value() === first()() true



//^ 클로저 예시
/* function counter() {
  let count = 0;

  function incre() {
    return ++count;
  }

  return incre;
} */

//? 화살표 함수 사용
/* function counter() {
  let count = 0;

  return () => ++count;
} */

// const a = (b)=>(c)=>(d)=> b+c+d;

//^ 함수 본문 자체를 변수 result에 계속 할당 - 가비지 컬렉터가 let count = 0을 수집해가지 않는다. (본문이 메모리 상에 있으므로. result가 함수 본문 자체를 가지고 있으므로 "참조 가능") = counter() 환경 자체를 가비지 컬렉터 수집 대상으로 보지 않는다. -> 계속 증가
let result = counter();
let result1 = counter();
let result2 = counter();
let result3 = counter();  // 새 환경 계속 생성 -> 메모리 문제




//^ 클릭 이벤트 처리
const bindEvent = (node, type, handler) =>{  //? type: click, bind 등등 나머지 에러여야 하므로 정규표현식 사용해서 처리 하는 방법도 있음
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }
  node.addEventListener('click', handler);

  return () => node.removeEventListener(type,handler);
}


function handleClick(){
  console.log('hit');
}

const remove = bindEvent('.first', 'click', handleClick)

getTimeout(()=>{
  remove()
  // document.querySelector.('.first').removeEventListener('click',handleClick);
}, 3000);






// 모든 함수에는 실행 컨텍스트가 있습니다. 실행 컨텍스트는 해당 함수 내의 변수와
// 해당 부모 환경에 대한 참조를 의미하는 환경으로 구성됩니다. 상위 환경에 대한 참조는
// 내부 함수가 작성된 범위 외부 또는 내부에서 호출되는지 여부에 관계없이 상위 범위의
// 모든 변수를 모든 내부 함수에 사용할 수 있게 합니다.
//
// 따라서 함수가 사실상 환경(해당 환경에 정의된 변수)에 대한 참조를 가지고 있기 때문에
// 함수가 이 환경(또는 영역(scope))을 "기억"하는 것처럼 보입니다!
//
// 모든 실행 컨텍스트에는 어휘 환경(Lexical Environment)이 있습니다.
// 이 어휘 환경은 식별자 바인딩(즉, 변수 및 관련 값)을 보유하고 있으며
// 외부 환경에 대한 참조도 가지고 있습니다.
//
// 각 환경이 접근 할 수 있는 일련의 식별자를 "범위(Scope)"라고 합니다.
// 이러한 범위를 "스코프 체인(Scope Chain)"을 통해 계층적 환경 체인에
// 중첩 할 수 있습니다.

// 어느 시점이든 하나의 실행 컨텍스트만 실행 될 수 있습니다.
// 이것이 JavaScript가 "단일 스레드"인 이유입니다.
//
// 즉, 한 번에 하나의 명령만 처리 할 수 있습니다. 일반적으로
// 브라우저는 "스택(Stack)"을 사용하여 이 실행 컨텍스트를 유지 관리합니다.
// 스택은 LIFO(Last In First Out) 데이터 구조입니다.

//
// 스택에 푸시(push) 한 마지막 것이 가장 먼저 꺼내집니다. 스택의
// 맨 위에 요소만 삽입하거나 삭제할 수 있기 때문입니다. 현재 또는
// "실행 중인" 실행 컨텍스트는 항상 스택의 맨 위에 있는 항목입니다.
//
// 실행 중인 실행 컨텍스트의 코드가 완전히 평가되면 최상위 항목이
// 팝(pop) 된 다음 실행 항목이 실행 컨텍스트를 실행하는 것으로
// 간주됩니다.
//
// 또한 실행 컨텍스트가 실행되고 있다고 해서 다른 실행 컨텍스트를
// 실행하기 전에 실행이 완료되어야한다는 것을 의미하지는 않습니다.
// 실행 중인 실행 컨텍스트가 일시 중단되고 다른 실행 컨텍스트가
// 실행 중인 실행 컨텍스트가되는 경우가 있습니다.
//
// 일시중단 된 실행 컨텍스트는 나중에 중단 된 부분을 선택합니다.
// 한 실행 컨텍스트가 이와 같이 다른 컨텍스트로 대체 될 때마다
// 새 실행 컨텍스트가 만들어져 스택에 푸시되고 현재 실행 컨텍스트가 됩니다.

// [ 실행 컨텍스트 N + 3  ] ⬅︎ 현재 실행 컨텍스트
// [ 실행 컨텍스트 N + 2  ]
// [ 실행 컨텍스트 N + 1  ]
// [ 실행 컨텍스트 N      ]
// [ 실행 컨텍스트        ] // 글로벌
