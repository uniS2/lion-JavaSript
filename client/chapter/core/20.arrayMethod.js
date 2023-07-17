/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

//* typeof: 언어상의 오류가 남아있어 다음과 같은 결과가 나온다. typeof null =  'Object', typeof [] = 'object', typeof function(){} = 'function'
//? Object.prototype.toString.call() : 어떤 형태를 가지고 있는지 문자로 반환
//? Object.prototype.toString.call(null) => '[object Null]'
// toString: 요소만 나열

//^ Array.isArray 배열인지 확인하는 static method
const isArray = data => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
}

const isNull = data => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';
}

const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표 살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마 평론가',
    age:18,
    imageSrc:'fQa15f3',
    alt: '드라마 좋아하세요?'
  },
]


/* 요소 순환 ---------------------------- */

//^ forEach

// arr.forEach((item, index)=> console.log(item, index));

// people.forEach((item) => console.log(item.name)) // 객체가 출력 -> 프로퍼티 접근

const span = document.querySelectorAll('span');

// console.log(span);  // NodeList(2) [span.first, span.second]
//? 이벤트 처리 할 때 이 방식이 제일 좋은가요? no
//? 이벤트 위임 event delegation
span.forEach((item, index) => {
  item.addEventListener('click', function(){
    // console.log(this,index);
  })
})

/* 원형 파괴 ----------------------------- */
// 실제 배열 데이터가 훼손

// push : 삽입한 요소의 위치 반환
// pop  : 추출된 요소 반환
// unshift
// shift

//^ reverse
// arr.reverse()
// console.log(arr);

//^ splice : 맥가이버 칼
arr.splice(1, 0, 5, 13);
// console.log(arr);

//^ compare function

// 반환 값 <0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 :  a와 b의 순서를 바꾸지 않다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

//^ sort
arr.sort((a,b) => {
  return a - b;
})

// console.log(arr)  // 유니코드식: [10, 100, 1000, 10000, 13, 5]


/* 새로운 배열 반환 ------------------------ */

const user = ['선범', '효윤', '준석'];

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css']
// console.log(newArray);

// slice
const slice = arr.slice(2,5);
// console.log(slice);

// toSorted
const toSorted = arr.toSorted((a,b) => {
  return b - a;
})
// console.log(toSorted)
// console.log(arr)

// toReversed
const toReversed = arr.toReversed();
// console.log(toReversed)

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
// console.log(toSpliced)

//$ 중요1. map
//? 기존 항목을 재구성해서 새로운 배열을 반환할 경우 사용. like getter
//* 1. 밑의 코드의 경우 접근성 문제 및 잘 읽히지 않는다.
// people.map((item, index) => item.profession )
//* 2. <div> 요소 넣기 - 콤마가 같이 생성
// const job = people.map((item, index) => {
//   return `<div>${item.profession}</div>`
// })

//# 태그 만들기 - map : 요소 재구성을 통해 화면에 반환하기
const job = people.map((item, index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="#" alt="" />
      </div>
      <span>이름: ${item.name}</span>
      <span>직업: ${item.profession}</span>
      <span>나이: ${item.age}</span>
    </div>
  `
  //  <img src="${item.imageSrc}" alt="" />
})

// React - list
/* function render(){

  return {
    <div>  // 배열 알아서 재구성 및 배열
      people.map((item, index) => `<div>${item.profession}</div>`)
    </div>
  }

} */

// document.body.insertAdjacentHTML('beforeend', job);

//? forEach -> like setter
//* 3. 콤마(,) 없애주기 위한 배열 요소 순환
job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
})

console.log(job);

//^ 추가예제: people 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공자의 나이 -1 내보내고 싶다.
const newAge = people.map((item) => {
  return item.age -1;
})


/* 요소 포함 여부 확인 ---------------------- */
// console.log(arr)

// indexOf
console.log( arr.indexOf(10) );

// lastIndexOf
console.log( arr.lastIndexOf(10) );

// includes
console.log( arr.includes(1000) )

/* 요소 찾기 ------------------------------ */

// find : 해당 아이템을 반환 - 처음 대상, 하나만 반환
const find = people.find((item) => {
  return item.id > 1
})

console.log( find );

// findIndex : 위치 반환
const findIndex = people.findIndex((item) => {
  return item.id === 3
})

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

//$ 중요2. filter : 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2
})

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

//$ 중요3. reduce
const totalAge = people.reduce((acc,cur) => {
  // console.log(cur);
  // '[object Object]40+30+52+18'
  return acc + cur.age
},0)  // 초기값: object가 아닌 나의 합을 반환받겠다

console.log(totalAge);


//# 태그 만들기 - reduce
const template = people.reduce((htmlCode, cur) => {
  return htmlCode + `<div>${cur.name}</div>`
}, '')

console.log( template );
document.body.insertAdjacentHTML('beforeend', template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');

console.log(arrayToString)