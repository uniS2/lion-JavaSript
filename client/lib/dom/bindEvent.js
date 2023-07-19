

function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  // (/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)
  if(!(/\bmouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);


  return ()=> node.removeEventListener(type,handler);
  // 이벤트 등록 후 다시 제거하는 걸 클로저 -> 이유는 성능 이슈
  // 이벤트가 많이 등록되면 성능상 이슈가 생긴다

}