

function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  // (/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)
  if(!(/\bmouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);  // 생성


  // outer environment 
  // return function (){
  //   return node.removeEventListener(type, callback);
  // }

  return ()=> node.removeEventListener(type,handler);
  // ? 이벤트 등록 후 다시 제거하는 걸 클로저 -> 이유는 성능 이슈
  // ? 이벤트가 많이 등록되면 성능상 이슈가 생긴다 (모든 상황이 아닌 특정 상황의 경우)
  // ? 예시 : 마켓컬리 같이 nav 메뉴를 내릴 시 안보이는 경우 -> 따라서 event 추가 후 제거해주어야 함
  // ? 예시2 : 게임 10번 실행 후 중단

  // function tiger() {
  //   return node.removeEventListener(type,handler)
  // }

  // return tiger;

}

const remove = bindEvent('.first', 'click', () => {

})  // callback : 인수 자체로 함수 전달