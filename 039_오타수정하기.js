// 문제 : 문장이 입력되면 모든 q를 e로 바꾸기

//1. 함수 사용
const word = prompt('영문을 입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
// split : q만 빼줌 -> join : q가 빠진 자리에 e를 넣어줌
console.log(replaceAll(word, 'q', 'e'));

//2. 정규식 사용
console.log(word.replace(/q/gi, 'e'));

// g : 전역 검색
// i : 대소문자 구분 안함
