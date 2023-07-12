/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tail: true,
  stomach:[],
  set eat(food){  //% setter. 메서드 하나로 getter와 setter 동시에 사용 가능 - get, set 메서드. enumerable하지 않은 애들로 판단 (false) -> for..in 문에 수집되지 않는다.
    this.stomach.push(food);
  },
  get eat(){ //% getter
    return this.stomach;
  }
}

// animal.eat('사료')
animal.eat = '사료' //% setter
// animal.getEat()
console.log( animal.eat );  //% getter


const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

}

//% 상속
tiger.__proto__ = animal; // 상속: animal 프로퍼티 또한 사용가능

tiger.eat = '늑대'
tiger.eat   // ['사료', '늑대']
tiger.hunt('gorani')  // 'gorani에게 조용히 접근한다.'
tiger   // {pattern: '호랑이무늬', prey: 'gorani', hunt: ƒ}


const fox = {
  prey: '',
  //% hunt를 쓰려면 따로 능력 부여해야함. (객체지향프로그래밍)
}

//% tiger의 hunt()는 가질 수 없다 - 새로운 값들은 각각의 요소들에 의해 재정의
//% 하나의 객체는 하나의 프로토타입만 상속가능
fox.__proto__ = animal; //% {prey: ''} : prey: "" eat: (...)


//% new Object(), 생성자 함수, {}, 일반함수

//% 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다.) - 일반. 생성자

//% 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자함수다? 알지?

function Button(name) {
  this.name = name; //? 생성자 함수로 쓰일 때, 여기서 this는 생성자 함수로 실행된 대상 - 객체생성하므로 'b' (생성자 함수 = 객체를 만들어 주는 함수)
  // console.log(name);  //* window. 일반 함수일 때는
  //* return {} 객체로 반환
}

/* const Button = (name) => {
  //# 화살표 함수는 constructor이 없어서 객체 생성할 수 없음 에러! + consise method
} */

/* function User (name,age,email) {
  this.name = name;
  this.age = age;
  this.email = email
}
function button(){

}

// const a = button()
const person1 = new User('선범',32,'tiger@naver.com'); */


/* function button() {

}

const a = button() //? 일반함수

const b = new Button('버튼'); //* 생성자 함수 - 객체 return
b  //? Button {name: "버튼"} 무조건 객체를 생성한다. */



// 생성자 함수 - getter와 setter 구분이 어렵다
function Animal(){  //* 상속시켜준 것과 똑같은 형태
  this.stomach = [],  // 새로 생성되는 object (instance)
  this.legs = 4,
  this.tail = true,
  this.eat = function (food) {  //? 함수로 들어갈 경우 get, set 붙일 수 없다
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

//* 부모의 능력이 자신의 것처럼 수집 (tiger 출력시)
const tiger = new Animal(); // 값이 모두 객체.

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target){
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`)
}

const cat = new Animal(); // Animal의 능력 상속
//# 실수로 일반 함수로 써주면 생성자함수의 기능을 못하여 "객체"를 생성하지 않는다.

cat.say = () => '니아야야아옹';

const fox = new Animal(); //* new 생성자함수 = constructor 를 통해 객체를 생성 및 집어넣어야!
const wolf = new Animal();
const dog = new Animal();

// const str = new String('a');
// const num = new Number(1);

//# animal 처럼 하나의 객체와 관련된 새로운 객체 여러개를 만들 때 재사용하기 위해서 생성자 함수를 쓰게 된다.

//? 기존의 일반 함수와 생성자 함수를 구별하기 힘들고, 함수 내 함수는 get, set을 쓸 수 없다.
//? ES6 : arrow function 함수. class 객체