// 문제 : 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다.
// 입력으로 문자열이 주어지면 2-gram으로 출력하기

const str = prompt('문자열을 입력하세요.');

for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
}
