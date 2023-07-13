/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Animal -> tiger -> 호돌이

class Animal{

  legs = 4; // 프로퍼티
  tail = true;
  stomach = [];

  /* constructor(name, ...args){  // 매개변수가 많을 경우
    args[i] */
    /* const tiger = new Animal{(
      name: ~~,
      age: ~~
    )}
    constructor(options){
      const {name,age} = oprions;  // 구조분해 할당 이용
    } */
  constructor(name){  // 필수! 최초 1회 실행합니다.
    this.name = name;
    // console.log('최초 1회 실행합니다.')
  }

  set eat(food){
    this.stomach.push(food);  // tiger.eat = 원하는 자료명
  }

  get eat(){
    return this.stomach;  // tiger.eat
  }
}


class Tiger extends Animal{

  #prey = ''; //* 빆에서 사용하는 사용자 입장에서 접근 불가능. 내부에서는 접근가능
  
  constructor(name, pattern){
    super(name) //* super은 내 부모의 name(this.name = name)을 실행하겠다.
    this.pattern = pattern;
  }

  hunt(target){
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톰 공격으로 ${this.prey}가 죽었습니다.`
  }

  static sleep(name){ // 생성되지 않아도 사용
    console.log(name + '이(가) 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬'); // 출력통해 확이나기

const hoho = new Tiger('hoho', '호피무늬');


class Champion{

  q = '';
  w = '';

  d = '';
  f = '';

  constructor(options){
    this.q = options.qValue
    this.w = options.wValue
    this.d = options.dValue
    this.f = options.fValue
  }

  pressD(){
    console.log( this.d + '발동!' );
  }
  pressF(){
    console.log( this.f + '발동!' );
  }
}

const yumi = new Champion({
  qValue: '샤르르탄',
  wValue: '너랑 유미랑',
  dValue: '점멸',
  fValue: '회복'
})




//? 버튼 예제 [범쌤]
class Button {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}






const button = new Button({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
});