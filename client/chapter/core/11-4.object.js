/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

//? 객체 안에 메서드는 무조건 consise method
//? method 안에 함수는 무조건 arrow function


// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  //@ total: 0, -> this.total
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    // shopOrder.menu[0].name
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],
  //% 메서드 추가해주세요 - 모든 것을 다 객체: 객체지향프로그래밍
  totalPrice() {
    // :function(){ / (){ consise method / :()=>{ 화살표함수. window
    /* let total = 0;  // 변수 선언 및 초기값 할당 해줘야!
    this.menu.forEach((item) => {
      total += item.price * item.count;
      //@ this.total += item.price + item.count; // 변수를 아무렇게나 만들지 않아도 된다는 장점
    }) */
    //% reduce, map은 return이 필수
    return this.menu.reduce((sumPrice, item) => sumPrice + (item.price * item.count), 0);
    // return total;
  },
};

// shopOrder.totalPice();

//% 함수형 프로그래밍
/* function totalPrice(...args){
  ...
} */

// for..of
/* for (let key of shopOrder.menu) {
  let sum = 0;
  for (let key of shopOrder.menu) {
    sum += key.price * key.count;
  }
  console.log(sum);
} */

//% forEach -> 객체 안에 함수를 넣고 싶어오!
let total = 0;
shopOrder.menu.forEach((item) => {
  total += item.price * item.count;
  // console.log(item.price);  // item 객체. shopOrder.menu[n] 생략
});

// console.log(total);

/* (shopOrder.menu[0].price * shopOrder.menu[0].count) +
  (shopOrder.menu[1].price * shopOrder.menu[1].count); */

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//?  반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index]; // consise method 일반함수 -> navigationMenu
  },
  addItem(newItem){ //% (newItem) => { this를 바인딩하지 않아 상위 컨텍스트에서 this를 가져옴. 따라서, window.items.push가 되버림 -> 일반함수. consise method 나를 호출한 (.) 대상을 this로 바인딩
    this.items.push(newItem);
  },
};

// console.log(navigationMenu.getItem(0));
//% arrowfunction의 문제 -> window로 올라가서 찾게됨
navigationMenu.addItem()  //% addItem을 호출한 대상은 navigationMenu !!

navigationMenu.addItem({
  id: 'link-l',
  text: 'Lycos',
  link: 'https://lycos.co.kr'
})