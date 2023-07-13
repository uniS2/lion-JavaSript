// eslint-disable
// eslint no-unused-vars: 'off'

// const a = 10;

// eslint-enable

// const b = 10;

//# 과제!
//# [유동균님] classList.toggle()메서드의 두 번째 인자로 불린값을 넣으면 클래스를 참일 때는 추가하고 거짓일땐 제거되게 할 수도 있습니다.

const input = document.querySelector('#todo');

let value = input.value;

input.addEventListener('input', () => {
  value = input.value;
  console.log(value === "hello");
})

console.log(value);

// input.value === '이메일' || ' 비밀번호'
//  input.classList.add('is--active');
//  input.classList.remove('is-active');