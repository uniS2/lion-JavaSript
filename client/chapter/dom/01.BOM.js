/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */
// setTimeout: 일정시간 지나면 동작
// setInterval: 일정주기로 동작
// 구조분해 할당시 바로 변수처럼 쓸 수 있다.  *다시 적지 않아도 접근이 가능.
const { alert, confirm, prompt, setTimeout, setInterval } = window;

//* callback, debounve

//? setTimeout
// 비동기

console.log(1);

const timer = setTimeout(() => {
  // console.log('몇초 뒤에 해당 코드가 작동됩니다.')
  console.log(2);
}, 5000);

console.log(3);


//? setInterval
const cancleInterval = setInterval(() => {
  console.log('이 코드는 1초마다 실행되는 코드입니다.')
}, 100);

const timer = setTimeout(() => {
  // console.log('몇초 뒤에 해당 코드가 작동합니다.')
  console.log(2);
  clearInterval(cancleInterval);  //  interval 자체를 중지
}, 500);

clearTimeout(timer);  // Timer 실행 코드 중단


//? window 안에 있는 location 객체
/* Location 객체 --------------------------------------------------------- */
//^ http://localhost:5500/index.html?type=listing&page=2#title
// 비동기통신

//* http: 프로토콜 (protocal)
//* http://localpost 호스트 (host). *location.host
//* http://localhost:8000 포트넘버 (port)   * 포트넘버 원래 쓰던거를 열어논상태에서 같은 포트번호로 열면 랜덤하게 열린다.
//* http://localhost:5500/index.html 경로명 (pathname)  *location.pathname
//* http://localhost:5500/index.html?type=listing&page=2 검색 (search)
//* http://localhost:5500/index.html?type=listing&page=2#title 해시 (hash)

const { href, protocol, host, port, search, hash, replace, reload } = location;
// location.replace('https://www.naver.com')  // 뒤로 가기가 불가
// location.href('https://www.naver.com')
// location.replace() -> 원하는 링크로 이동(뒤로가기 불가)
// location.href() -> 원하는 링크로 이동(뒤로가기 가능)
// location.reload() -> 새로고침

//^ Symbol.iterator 내장
const urlParams = new URLSearchParams(location.search);
// location.search = '바나나'
// location.hash = '#PAGE05'

//^ key, value 로 들어오므로 구조분해 할당을 통해 출력
for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}


//? Navigator
/* Navigator 객체 -------------------------------------------------------- */

// platform : 브라우저가 실행되는 플랫폼 정보를 변환: 운영체제 (win32, mac...)
// userAgent : 브라우저와 운영체제 정보를 반환
// language : 브라우저에서 사용되는 언어를 반환
// online : 브라우저가 온라인인지 여부를 반환
// geolocation :  *geolocation.getCurrentPosition(콜백)

const { platform, userAgent, language, onLine, geolocation } = navigator;

function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1: browserName = 'MS edge'; break;
    case agent.indexOf('opr') > -1: browserName = 'Chrome'; break;
    case agent.indexOf('trident') > -1: browserName = '🤬IE ?'; break;
    case agent.indexOf('firefox') > -1: browserName = 'Mozilla Firefox'; break;
    case agent.indexOf('safari') > -1: browserName = 'Safari'; break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

browserName();

// function getLocationPosition() {
//   return new Promise((resolve, reject) => {
//     geolocation.getCurrentPosition((data) => {
//       // RejectionEvent geolocation.getCurrentPosition((data) => { // 비동기 방식
//       // console.log(data);  // 위치추적
//       // console.log( data.coords.latitude );  // 위도
//       // console.log( data.coords.longitude ); // 경도
//       if (!data) {
//         reject({ message: '위치 서비스를 활성화 해주세요.' });
//       } else {
//         const { latitude, longitude } = data.coords;
//         console.log(2);
//         resolve({ latitude, longitude });
//       }
//     });
//   });
// }

// 범쌤윙크: 인터렉티브 웹 - 캔버스 예시: tensorflow 모델 
// 실시간 stream 영상
navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
  
  document.querySelector('#videoElement').srcObject = stream;
}) // 카메라 사용권한 요청


//? Screen
/* Screen 객체 ----------------------------------------------------------- */

// height : 모니터 사이즈
// availHeight : 브라우저의 크기
// innerHeight : 브라우저 해상도 크기 (안)  // window

//^ orientation : 모니터 방향
// (정방향 : landscape-primary)
// (세로방향 : portrait-primary)

const { width, height, availWidth, availHeight, orientation } = screen;


//? History
/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
// history.go(n)
// history.length // 이력 기록


//  ssr
//  csr