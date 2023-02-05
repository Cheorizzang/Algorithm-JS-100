// 문제 : 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하기

const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = '';

for (let index in array) {
    let val = array[index];
    result[val] =
        result[val] === undefined ? 1 : (result[val] = result[val] + 1);
    // result라는 객체의 키와 밸류를 바로 생성
}

winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b;
}); // reduce는 결과값으로 나온게 다시 a가 되는 식으로 중첩됨

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

// Object.keys(obj) : obj라는 객체의 키 값만 배열로 반환
