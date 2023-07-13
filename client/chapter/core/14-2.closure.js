//? 클로저 = 자신이 태어난 환경을 참조하는 아이. '폐쇄' -> 가비지 컬렉터가 들어오지 못하므로
//* 호랑이가 지구에서 쫓겨난 후에 지구에 새로운 키, 밸류가 추가되면 그것도 호랑이가 수집할 수 있다! 하지만 호랑이의 이름은 중요하지 않다.. 호랑이불쌍해😿
//* ufo의 매개변수는 earth()의 매개변수를 거치지 않는다
//* 함수 자체를 넘겨주었기 때문에 가비지 컬렉터의 대상이 되지 않는다.

function earth() {
  //^ 외부 function: 변수 지정
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;

  //^ 내부 function: 실행 시킬 내용 지정
  return function (value) {
    // 익명함수
    gravity = value;
    console.log(gravity, water);
  };

  // arrow-function 가능
  /* return (value) => {
    gracity = value;
  } */

  // return tiger
}

const ufo = earth();

ufo(5); //? closure



//^ 실예시1: button 예시
const button = document.querySelector('button');

// let isClicked = true; //! 전역이 오염됨 -> 클로저 사용

function handleClick() {
  let isClicked = true; // 계속 기역 - closure의 기능

  return function () {  // () => {} arrow function 
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked;
  }
}

button.addEventListener('click', handleClick);


//^ 실예시2: 리액트에서 사용하는 기능: hook !!
function useState(initValue){

  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
  
}

// setClick()
const [state, setState] = useState(true);
