import { getNode, getStorage, setStorage } from "./lib/index.js";




const textField = getNode('#textField');




function handleTextField(){
  const value = this.value;

  setStorage('text',value);
}


function init(){
  
  getStorage('text').then((res)=>{
    textField.value = res;
  })

}

textField.addEventListener('input',handleTextField)
window.addEventListener('DOMContentLoaded',init)  // DOM 구성이 완료되었을 때 document 객체에서 실행. 돔이 생성되기전 돔을 조작하는 자바스크립트 코드가 실행되어 원하지 않는 결과를 내는것을 막을 수 있다