// 문제 : 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력된다.
// 그 문자가 시작하는 index를 반환하기

const str = prompt('문자열을 입력하세요.');
const word = prompt('찾을 문자를 입력하세요.');

console.log(str.indexOf(word));
// console.log(str.search(word));

// search & indexOf
// 1. 처음 검색된 값을 반환
// 2. 일치하는 값이 없으면 -1을 반환
// 3. search : 검색 시작 위치 지정 X / 정규표현식 O / 정규표현식 사용시 좋음
// 4. indexOf : 검색 시작 위치 지정 O / 정규표현식 X / 간단한 사용시 좋음
