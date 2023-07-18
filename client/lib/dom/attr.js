function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value); // ^ 반환값이 필요없는 경우이기 때문에 return 은 사실상 필요가 없다.
}

// 작은 함수를 만들고 보다 큰 함수로

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);


function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

// IIFE (예전)

// ! 캡슐화에 대한 설명 확인
