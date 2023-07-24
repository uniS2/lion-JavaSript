/* global gsap */
// eslint
// gsap: 애니메이션 라이브러리 .stop(), play(), restart() 제공

export const shake = gsap.to('form', {
  duration: 0.1,
  x: -10,
  repeat: 5,
  yoyo: true, // yoyo: 돌아오는 애니메이션
  clearProp: 'x', // 실행 후 반복
  paused: true, // 일시정지 - 바로 실행 X. 호출하면 실행
});
