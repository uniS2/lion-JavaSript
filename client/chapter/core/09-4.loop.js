/* ---------------- */
/* For In Loop      */
/* ---------------- */


/* 자바스크립트는 모두 객체이며,
진짜 객체 -> 객체 능력 -> 배열 / 숫자 / 문자 / 함수 능력 -> 각자만의 메서드 능력으로 이루어져있다. 즉, 이 메서드들은 각 대상만 쓸 수 있다.
밑의 javaScript는 진짜 객체가 생성해준 객체이므로, 진짜 객체의 메서드를 상속받는다.
따라서, Object.prototype 객체와 call() 메서드를 이용하여 원본에서 각 대상의 메서드 기능 빌려와 생성한 객체의 속성을 조회한다. */
const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  /* hasOwnProperty(){
    return
  } /* '이게 된다고..?'
  위와 같이 객체의 메서드를 다시 생성하는 행위는 본래의 능력을 상실-손상 위험-하며 조회가 되지 않게 만든다.
  설명을 위해 예시로 만들어 보여주었을뿐 위험하니 절대 생성하지 말 것 */
};

// in 문 : 객체 안에 내가 원하는 값(property)이(가) 있어?

const key = 'nickName';
/* 밑의 방식은 valueOf, toString, constructor 등 진짜 객체의 속성. 즉, 조상 요소까지 다 찾게된다. */
// console.log( key in javaScript );

// 객체의 속성(property) 포함 여부 확인하는 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 다음과 같이 진짜 객체에 속성을 만들어 줄 경우 진짜 객체에도 생성되기 때문에 적절하지 않다.
Object.prototype.nickName = 'duckduck';

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// let keys = javaScript.hasOwnProperty(key);
/* 만든 객체에서 속성을 조회할 경우 진짜 객체(조상 요소)의 속성까지 모두 조회가 되기 때문에 적절하지 않다. - 만들어진 nickName 까지 반환
자바스크립트 언어 자체의 능력. 진짜 객체의 원본(prototype)에서 call() 메서드를 통해 hasOwnProperty 기능을 빌려 만든 객체 javaScript의 요소만 불러온다. */

let keys= Object.prototype.hasOwnProperty.call(javaScript,key);

console.log(keys);


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

for(let key in javaScript){ 
  // 자기 자신만 출력하며 nickName을 반환하지 않는다. Object.prototype => ({})
  if(({}).hasOwnProperty.call(javaScript,key)){

    console.log(key);

  }
}


// - 배열 객체 순환에 사용할 경우?
const tens = [10,100,1000,10000];

/* 설명+ 순환을 할 수는 있으나 용도에 적합하지 않음 - 진짜 객체의 설정한 키 값까지 나온다
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in */
for(let key in tens){
  console.log(tens[key]);   // key, tens[key]
}


// for ... in 객체를 순환하는 용도로 사용이 가능함.
// 배열은..좀 그래요.. for...in은 객체에 양보하세요..