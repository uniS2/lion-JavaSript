function refError(message) {
  throw new ReferenceError(message);
}

export default refError;
// default 로 내보내면 중괄호 필요 없음
