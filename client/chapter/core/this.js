
//'use strict' - this 참조 불가 'undefined'
// 큰 걱정 x 모듈 프로그래밍 ( 'use strict' )



function foo(){ //% [Scopes]: 전역
  console.log(this);  //% window

/*   function bar(){ //@ [Scopes]: 전역
    console.log(this);  //@ window
  } */

  const bar = () => {
    console.log(this) //@ 부모의 this를 가져옴
  }

  bar() // 알아서 실행
}

foo()


//? 객체에서의 메서드는 일반함수
//? 메서드 안에서 화살표함수 : 부모의 실행 컨텍스트를 찾으므로

const user = {
  foo(){ 
    console.log(this);
    const bar = () => {
      console.log(this) //@ 부모의 this를 가져옴
    }
    bar() // 알아서 실행
  }
}