export function endScroll(node){
  node.scrollTop = node.scrollHeight;
}

// scrollHeight: 요소 콘텐츠의 총 높이
// scrollTop: 요소의 수직 스크롤 바 위치