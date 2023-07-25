import { attr } from "../dom/attr.js";
import { getNode } from '../dom/getNode.js'
import { memo } from "../utils/memo.js";
// import { gsap } from "../../../node_modules/gsap/index.js";

const cube = getNode('#cube');

memo('cube', ()=>getNode('#cube'));

memo('cube'); // getNode를 한 cube

let random;
gsap.to(memo('cube'),{duration:1,rotationX:100,rotationY:-100,ease:'back(10)'});


export function diceAnimation (){


  random = gsap.utils.random([0,1,2,3,4,5]);

  // complete() 함수에서는 cube 요소의 dice 속성을 변경하여 주사위의 숫자를 설정합니다.
  // setAttr : node.dataset[prop] => data-dice
  function complete(){
		attr(memo('cube'),'dice',random + 1)
  }

  const rotationValue = [
    [0,0], // 1
    [0,-90], // 2
    [-90,0], // 3
    [90,0], // 4
    [0,90], // 5
    [-180,0], // 6
  ]

  // gsap.to(): 이 메서드는 GSAP 라이브러리의 애니메이션을 생성하는 함수
  // GSAP를 이용하여 3D 객체인 cube에 일정한 시간 동안 이동(z축), 회전(X축 및 Y축)을 적용하는 애니메이션
  // 3D 공간에서 z축은 보통 화면에서 멀리 떨어진 방향
  gsap.to(memo('cube'),{ease:'linear',duration:0.2,z:-100,rotationX:rotationValue[random][0],rotationY:rotationValue[random][1],onComplete:complete}) // 애니메이션 완료 후 호출할 함수 지정
}