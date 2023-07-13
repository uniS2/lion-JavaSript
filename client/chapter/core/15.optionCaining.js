/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);  //* Cannot read properties of undefined.
//? 자바스크립트의 객체는 없는 아이에 접근을 해도 undefined 출력. 에러X.
console.log(portableFan.photos?.animate); //* 옵셔널 체이닝

if(portableFan.photos === 'undefined'){
  throw new Error('에러!')
}

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.





//^ json
// JavaScript Object Notation

//^ 비동기: 없던 버튼 요소를 나타나게 하는 경우

const button = document.querySelector('button');

console.log( button );

button?.addEventListener('click',function(){
  this.style.backgroundColor = 'orange';
})


//?  sync 동기     async 비동기 - defer
//^ 작동 순서로 알아보는 비동기
/* 
// console.log('첫 번째 실행');

setTimeout(()=>{

  // console.log('두 번째 실행');  //^ 비동기로 작동 : 코드의 순서를 무시했으므로

}, 3000)  //^ 설정한 일정 시간 뒤에 실행 (delay) = 비동기!

// console.log('세 번째 실행'); */

//^ button을 클릭하였을 때 설정
// const timer = setTimeout(()=>{

//   const button = /* html */`
//     <button type="button">clickMe</button>
//   `

//   document.body.insertAdjacentHTML('beforeend',button); //^ button 요소를 집어 넣음

// },5000)
// clearTimeout(timer)  // 해제


//^ 요소의 스타일 변화
let count = 0;
const interval = setInterval(() => {
  // console.log('반복 실행');
  console.log(++count);
  document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`

  if(count > 50){
    clearInterval(interval) //* 실행 멈춤
  }

}, 10); //* 일정 delay 기준으로 반복 실행
//* 조건문과 달리 시간을 제어. 실행이 계속 반복될 경우 메모리 누수 발생하므로 브라우저 내에서 다른 탭을 이동할 시 일시 중단

// requestAnimationFrame()   // 재귀