/* 

$[readystate] (현재 상태)

0: uninitialized. 값이 들어오지 않았던, 초기화 상태
1: loading. 로딩 후
2: loaded. 이벤트가 완벽하게 이루어졌다면 ~~ onreadStatechange라는 이벤트 상태 함수 안에서 볼 수 있다
3: inertactive
4: complete

*/

/*
const xhr = new XMLHttpRequest(); //$ 비동기 통신 - 엔진 XHL 생성자 담아서 많이 사용 (FETCH)

//$ open
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); //$ 방식, URL
//^ 1. 통신이 성공했을때 : 확실히 실행했다는 조건이 있어야 아래 항목을 수행

//$ 이벤트 리스너
xhr.addEventListener('readystatechange', () => {
  //^ 2. 수행
  //^ readystatechange 이벤트 영역: state 변경될때마다 출력 - loaded. interactive. complete
  //* 서버의 응답 상태가 변경될 때마다 발생하며, 상태가 변경될 때마다 함수 내부의 코드가 실행

  const { status, readyState, response } = xhr; //* 응답의 상태 코드(status), readyState(현재 XMLHttpRequest의 상태를 나타내는 값), 응답 데이터(response)

  if (status >= 200 && status < 400) {
    if (readyState === 4) {
      // console.log('통과');
      console.log(JSON.parse(response)); //$ response: string -> parse: 배열
    }
  } else {
    console.log('실패');
  }

  // console.log(xhr.status);  //* 상태코드; 200 정상
  // console.log(xhr.readyState);  //* 4: complete. 성공적으로 이루어짐! (요청이 완료)
});

//$ send
xhr.send(); */

/* callback ------------------------------------------------------------*/

/* const sum = (a,b, onResult) => {
  const c = 1;

  if(a === c){
    onResult(c)
  } else {
    console.log(2)
  }
}

sum(1, 2, (c) => {
  console.log(c)
}) */

//* 함수에 바로 options 넣어주기
/* function xhr(options) {
// const xhr = (method, url, onSuccess, onFail, body, headers) => {
  // 구조 분해 할당! const { method, url, onSucess, onFail, body, headers } = options

  const {
    method = 'GET',
    url = '',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
      'Content-Type': 'application.json',
      'Access-Control-Allow-Origint': '*',
    },
  } = options; */

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  // const onSuccess = () => {}

  xhr.open(method, url);

  // console.log(Object.entries(headers));
  // 반복
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value); // xhr에 헤더의 메서드값을 바꿔주는기
  });

  // xhr.setRequestHeader(headers);
  //? 타입을 잘 명시 => 개발자도구:network - Content-Type: application/json

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response)); //? callback : 통신된 결과를 가져오고 싶다!. arguments
      } else {
        onFail('실패');
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

//? 세번째 인수로 함수 받아주기 -> 세 번째 parameter
//? callback : 다른 코드의 인수로서 넘겨주는 실행 가능한 코드로 다른 함수가 실행을 끝낸 뒤 실행되는 callback되는 함수 => 비동기통신 + 함수결과 외부에 내보내는 효과

/* xhr(
  'POST', // 'GET(READ)'
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    //? result: parameter로 동작 - arguments: JSON.parse(response)
    console.log(result);
  },
  (err) => {
    console.log(err);
  },
  {
    name: 'tiger',
    age: 32
  },
  {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*' // 모두 허용
    //^ 전체 또는 특정 페이지 설정해야 안전하게 그 사이트만 접근 가능. '동일 출처(origin)에서만 요청하도록 제한하는 보안 메커니즘' -> 권한 부여하도록 브라우저에 알려주는 객체
  }
); */ //^ GET 방식으로 'https://jsonplaceholder.typicode.com/users' 주소로 AJAX 요청 - JSONPlaceholder API에서 사용자 정보를 받아오는 요청

// method, url, onSucess, onFail, body, haeders
//^ 순서 상관없이 하나의 객체로 호툴가능
/* xhr({
  // method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: (result) => console.log(result), //* concise 메서드
  onFail: (err) => console.log(err),
  body: {
    name: 'tiger',
  },
  // headers: {},
}); */

//$ xhr의 필수요소 : open, 이벤트, send
// onreadStatechange : 현재 상태에 따른 변경사항
// readyState : 현재 상태
// status : 상태코드

// ES6가 되면서 fetch가 생기고 jQuerry는 물러갔다

//$ 교차 출처 리소스 공유 (CORS) (https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

/* 
동일 출처 정책(SOP)는 "Same-Origin Policy"의 약자로, 웹 브라우저에서 보안을 강화하기 위해 적용되는 정책입니다. 이 정책은 웹 페이지의 자바스크립트나 XMLHTTPRequest와 같은 리소스들이 동일 출처(origin)에서만 요청하도록 제한하는 보안 메커니즘입니다.

출처(origin)란 프로토콜, 호스트, 포트 번호로 구성된 URL을 말합니다. 예를 들어, 'https://www.example.com'와 'https://api.example.com'은 서로 다른 출처로 간주됩니다. 따라서 www.example.com에서 로드된 웹 페이지는 api.example.com의 리소스를 요청하는 것이 SOP에 위배되며, 브라우저는 이러한 요청을 차단합니다.

SOP의 목적은 사용자의 개인 정보와 보안을 보호하기 위함입니다. 만약 SOP가 없다면, 악성 웹 사이트가 다른 도메인의 사용자 정보에 접근하는 등 보안 위협이 발생할 수 있기 때문입니다.

하지만 SOP는 동일 출처 정책이기 때문에, 웹 애플리케이션에서 다른 도메인의 리소스에 접근해야 하는 경우에는 CORS (Cross-Origin Resource Sharing)와 같은 보안 메커니즘을 사용하여 이를 허용할 수 있습니다. CORS는 서버에서 특정 도메인에서의 요청을 허용하도록 설정하는 방식으로, SOP를 우회하는 방법 중 하나입니다. 이를 통해 웹 애플리케이션이 여러 도메인 간에 안전하게 데이터를 공유하고 상호작용할 수 있도록 합니다.
*/

//? 1. 자바스크립트의 함수는 객체다. <- 함수인데 함수의 메서드를 가질 수 있다.
//? 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
//? 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !!

//? jsDoc -> build시 설명서를 만들어준다.



// 정의
/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return sever data
 */
xhr.get = (url, onSuccess, onFail) => {
  // xhr 전달 해주자! -> xhr 함수 실행
  xhr({
    url, // short property (alias)
    onSuccess,
    onFail,
  });
};

// console.dir(xhr);

xhr.post = (url, body, onSuccess, onFail) => {
  // xhr 전달 해주자! -> xhr 함수 실행
  xhr({
    method: 'POST',
    url, // short property
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// 실행부
// get
/* xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  (result) => console.log(result), //* concise 메서드
  (err) => console.log(err)
); */

// delete
/* xhr.delete(
  'https://jsonplaceholder.typicode.com/users/1',
  (result) => console.log(result),
  (err) => console.log(err)
) */