function getNode(node){

  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다')
  }

  return document.querySelector(node);
}


// getNodes: 여러 요소를 잡을 경우

function getNodes(node){

  if(typeof node !== 'string'){
    throw new Error('getNodes 함수의 인수는 문자 타입이어야 합니다')
  }

  return document.querySelectorAll(node);
}