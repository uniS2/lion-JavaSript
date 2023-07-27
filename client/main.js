/* global gsap */

import {
  getNode as $,
  S2,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  attr,
  clearContents,
} from './lib/index.js';

// 1. tiger(S2) 함수를 user를 가져와 주세요
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
//        - html template를 만든다 (username, email, website, )
//        - 유저 data를 넘겨주기
//        - inserLast
// 4. 함수 분리 하기

// 에러가 발생 했을 때
// empty svg를 생성하고 렌더링 해주세요

//^ delete 통신시 서버에만 반영되고 화면에는 삭제된 것처럼 보이지 않음 => 다시 get 통신하여 화면에 re-rendering 해주는 개념
//* [조장님] 새로고침 : 모든 데이터 새로고침 !== 한번 더 get 통신으로 렌더링  => 새로 고침시 비동기 통신으로 데이터를 받아오는 의미가 없음

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner)

  //* 비동기 통신: cry-catch 문 필요
  try {
    await delayP();  //% {timeout: 2000}, 애니메이션 끝난 후 제대로 제거를 해주어야함
    
    gsap.to('.loadingSpinner', {
      opacity:0,
      onComplete(){
        // this.targets[0].remove();
        $('.loadingSpinner').remove(); // Node.remove();  자바스크립트가 가지고 있는아이
      }
    })

    //* promise object [[result]]
    const response = await S2.get('http://localhost:3000/users');
    // 'https://jsonplaceholder.typicode.com/users'
    // console.log(response);

    const userData = response.data;

    // 어디에 렌디링 할건데? 어떤 데잍터를 렌더링 할건데?
    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });

  }
  catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
    
  }
}

renderUserList();


// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.

// - 이벤트 위임 e.target
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr(), dataset


function handleDelete(e){
  e.preventDefault();
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if(!button || !article) return;
 
  const id = article.dataset.index.slice(5);
  // [동균님] attr(article, 'data-index').split('-').at(-1)
  // [치현님] 규식이형
  // attr(articel, 'data-index)

  //* 통신은 성공했지만 브라우저 권한이 없어 보진 못한다...ㅠ
  S2.delete(`http://localhost:3000/users/${id}`)
  .then(()=>{
    // 컨텐츠 항목 전체 지우기 -> 다시 로드
    clearContents(userCardInner); 
    renderUserList()  //# re-rendering
  })


}


userCardInner.addEventListener('click', handleDelete);


/* 
<article class="user-card" data-index="user-1">
  <h3 class="user-name">kindtiger</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="mailto:tiger@euid.dev">tiger@euid.dev</a>
    </div>
    <div>
      <a class="user-website" href="http://tiger.com" target="_blank" rel="noopener noreferer">tiger.com</a>
    </div>
  </div>
  <button class="delete">삭제</button>
</article>
*/

/*
# 에러의 이유
- 현재 forEach 문에서 요소들은 item의 이름으로 받아주기 때문에 userData가 아닌 item.name으로 이용해야 한다!
    <article class="user-card" data-index="user-1">
    <h3 class="user-name">{$userData.name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:{$userData.email}">{$userData.email}</a>
      </div>
      <div>
        <a class="user-website" href="http://{$userData.website}" target="_blank" rel="noopener noreferer">{$userData.website}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
*/
