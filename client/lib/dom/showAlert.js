import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";

export function showAlert(node, text='에러입니다!', timeout = 1000){
  if(typeof node === 'string') node = getNode(node);

  node.textContent = text;

  // 비동기
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}

// showAlert('.alert', '이름이 없습니다.', 2000) : 동일한 class의 경우 제일 첫번째 노드를 반환