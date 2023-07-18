/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

// ^ 문서를 수정하는 메서드 - 요즘 insert

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

// let div = document.createElement('div');

// div.className = 'box';
// div.textContent = '상자'; // div. 상자 요소 추가



/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// # elementNode.insertAdjacentHTML(어디에?, 값);
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입


// 동적 렌더링을 위해 생성 및 요소 추가
// const body = document.body;

// body.insertAdjacentHTML('beforeend', `<div class="box">상자</div>`)

const h1 = getNode('h1');

const template = /* html */`
  <div class="box">${10 + 30}</div>
  `

h1.insertAdjacentHTML('beforebegin', template) // ? template 는 문자만 가능
//^타겟                       위치       렌더링 항목





const data = ['빨래하기','게임하기','유튜브보기','산책하기'];

// forEach => 반환
// reduce => 아무거나 (초기값 따라)

// filter => 배열을 반환
// map => 배열을 반화

// for 문

const todo = getNode('.todo');

// - 1. 태그를 생성하기
// '<li></li>'

// - 2. 태그 안에 아이템값 넣기
// <li>${data[0]}</li>

// - 3. 생성된 태그를 내보내기(배열)
const todoList = data.map((item) => {
  return `<li>${item}</li>`
})
console.log( todoList );

// react는 4, 5 생략, 배열만 생성하면 된다
// - 4. 내보낸 배열 순환하기: 배열 순환해서 purt text
todoList.forEach((item) => {
  console.log(item);

  // - 5. 반복문안에서 렌저링하기
  // ! 에러 발생: Cannot read properties of null (reading 'insertAdjacentHTML')
  todo.insertAdjacentHTML('beforeend',item)
  //^타겟                     위치     렌더링 항목
  insertLast(todo, item);
})

// [동균님-문자열변환] todo.insertAdjacentHTML('beforeend', todoList.join('\n'));

// ElementNode.insertAdjacentHTML('beforebegin', 'text')
// ElementNode.insertAdjacentHTML('afterbegin', 'text')
// ElementNode.insertAdjacentHTML('beforeend', 'text')
// ElementNode.insertAdjacentHTML('afterend', 'text')

insertLast(todo, `<div>문자</div>`);

// - 6. 렌더링
// React - 렌더링 리스트
/* function render(){

  return(
    <ul>
      {
        // ['빨래하기','게임하기','유튜브보기','산책하기']
        data.map(item => `<li>${item}</li>`)
      }
    </ul>

  )
} */