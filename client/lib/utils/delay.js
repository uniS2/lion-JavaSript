import { getNode } from '../dom/getNode.js';
import { refError } from '../error/refError.js';
import { insertLast } from "../dom/insert.js";

/* function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);

  setTimeout(() => {
    callback;
  }, timeout);
} */

// xhr 예시
/* xhr.get('https://jsonplaceholder.typicode.com/users',

(res)=>{
  console.log(res);
  xhr.get('server',()=>{
    xhr.get('pw',()=>{
      ...
    })
  })
}) */

//? getNode
const first = getNode('.first');
const second = getNode('.second');

// callback의 문제와 해결 방안
// 한번에 실행 : 올라감과 동시에 회전 => 제자리에서 회전
// 원하는 실행 : 올라가기 -> 회전 -> 내려가기
// gsap 만한게 업따 ^^*
/* first.style.top = '-100px';
first.style.transform = 'rotate(360deg)'
first.style.top = '0' */

/* delay(()=>{
  first.style.top = '-100px';

  delay(()=>{
    first.style.transform = 'rotate(360deg)';

    delay(()=>{
      first.style.top = '0';
      second.style.top = '0';
    })
    
    second.style.top = '100px';
  })
}) */

// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

// 객체 합성 mixin

/* const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
}; */

export function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options }; //* 재할당: 오버라이트 -> 전개연산을 이용하여 다시 객체할당!(얕은 복사) 뒤의 객체가 앞의 객체를 덮어씌운다.
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  // console.log(config);

  return new Promise((resolve, reject) => {
    // resolve({name:'tiger', age:33});
    // reject({message: '알 수 없는 오류가 발생했습니다.'});
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

/* delayP({ shouldReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch((message) => {
    alert(message);
  })
  .finally(() => {
    // console.log('어쨌든 실행합니다.');
  }); */

//$ Promise 정리
/* 
$ 1. new Promise 는 프라미스 객체를 반환한다.
$ 2. 인수로 넘겨주는 result, error가 자동으로 결과 또는 에러를 도출한다.
$ 3. excutor(실행함수) 에서 반환되는 결과는 무조건 .then 을 통해 받을 수 있다.
+ always 사용하면 결과를 바로 받을 수 있다.

^ 1. 신뢰
^ 2. 
*/

//$ Promise 체이닝 미리보기
/* function delay_P() {
  return new Promise((성공, 실패) => {
    setTimeout(() => {
      성공('통신 성공');
      // 실패('통신 실패!!');
    }, 1000);
  });
} */

/* delay_P()
  .then((결과) => {
    console.log('로직 실행');

    return delay_P();
  //   return new Promise((성공, 실패) => {
    
  // })
  })
  .then((결과) => {
    console.log('로직 실행');

    return delay_P();
  })
  .then((결과) => {
    console.log('로직 실행');
  }); */

//$ fetch 미리보기
/* async function fetch(){
  const response = fetch('url', {
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })

  response ? // 기억이 안난...
} */

/* promise API ----------------------------------- */

//$ 믹스인 - 재사용 가능
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  // mixin
  // let config = {...defaultOptions, ...options};
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaultOptions,
    options
  ); // 명시적 방법

  if (!url) refError('서버와 통신할 url은 필수값 입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url); // 받기

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body)); // 정보 자체를 열고 보내기

  return new Promise((resolve, reject) => {
    // 값 receive
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

/* xhrPromise({
  url:'https://jsonplaceholder.typicode.com/users'
})
.then((res) => {
  // console.log(res); // JSON.parse
  res.forEach((item)=>{
    console.log(item);
  }))
}); */

//^ 함수 안에 내장된 메서드 이기 때문에 xhrPromise만 export해도 사용할 수 있음
xhrPromise.get = (url) => {
  return xhrPromise({
    //$ promise 객체 찾기
    url,
  });
};

xhrPromise.post = (url, body) => {
  //^ xhrPromise객체에 post메소드를 선언
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

//^ get을 함수로 호출 -> return 이 있어야 값을 반환해줄 수 있다!!
// undefiend -> pending
/* xhrPromise.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  console.log(res);
}) */

// xhrPromise.post('https://jsonplaceholder.typicode.com/users', {name:'tiger'});

async function delayA() {
  // return '성공!';
}

const data = await delayA(); //^ promise 객체 - 코드의 실행흐름 제어

// console.log(data);


//? async - 함수가 promise 객체를 반환 하도록
//?       - await 사용 

//? await - 코드의 실행 흐름 제어 (멈춰)
//?       - result값 가져오기 

async function 라면끓이기() {

  // delayP({data:'물넣기'})
  // .then((res => console.log(res)))

  const 물 = await delayP({data:'물넣기'})
  console.log(물);
  // await delayP(); //^ promise 객체가 떨어져야 실행

  const 스프 = await delayP({data:'스프넣기'})
  console.log('스프');

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);


  console.log('접시');
  await delayP();
}

// 라면끓이기();

// then 결과 가져오기
// await 결과 가져오기


/* async function getData(){
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/143')
  // const data = xhrPromise.get('https://api.github.comm/repos/uniS2/like-lion/commits') // header 설정해주어야

  //^ then 결과 가져오기
  // data.then((res)=>{
  //   console.log(res)
  // })

  const pokemon = await data; //$ 뒤에 promise 객체오면 await 사용 가능

  // console.log(pokemon);  // 내 github 주소 출력

  console.log(pokemon.sprites['front_default']);

  insertLast(document.body, `<img src="${pokemon.sprites['front_default']}" alt="" />`)
} */

// getData()


// POST 메서드 구현 예제
async function postData(url = '', data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE 등
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

// postData('https://example.com/answer', { answer: 42 }).then((data) => {
//  console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
// });