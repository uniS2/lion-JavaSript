/* ------------------ */
/* Variables          */
/* ------------------ */

/* 변수 가지고 놀기
1. admin과 name이라는 변수를 선언하세요.
2. name에 값으로 "John"을 할당해 보세요.
3. name의 값을 admin에 복사해 보세요.
4. admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다. ----------- */

let admin; // undefined. const 는 선언과 할당 동시
let name; // undefined

// 참조에 의한 복사

name = 'John';
admin = name;
name = 'seoul';
console.log(admin);
console.log(name);

/* 올바른 이름 선택하기
1. 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
2. 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요? ----------- */

const livePlanet = 'Earth'; // ourPlanetName
let onlineUser = 'sosom'; // currentOnlineUsers
let onlineName = 'sso';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAYW_PER_YEAR = 365;

// - 구매 결제 여부 (했어 안했어 / 있어 없어)
let isPayment = true;
let hasClassName = false;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = 'NIKE';

// - 오늘의 운세
let fortuneOfToday;
let todayLuck;

// - 상품 정보
const productInformation = '';

// redux, recoil, ajax

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

// 찐 상수를 불러 선언 및 할당
const PADING = 'api/panding';
const LOADING = 'api/loading';
const FULFIELLED = 'api/fulfilled';
const REJECTED = 'api/rejected';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */
