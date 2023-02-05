// 문제 : 학생들의 점수를 공백으로 구분하여 입력을 받고 1~3위의 학생 수(중복 포함)를 출력하기

const scores = prompt('점수입력')
    .split(' ')
    .map(function (n) {
        return parseInt(n, 10);
    });

scores.sort((a, b) => {
    return a - b; // 오름차순
});

let count = 0;
let top3 = [];

while (top3.length < 4) {
    let n = scores.pop(); // 배열의 마지막 원소 추출
    if (!top3.includes(n)) {
        top3.push(n); // 배열의 마지막에 요소 추가한 후 배열의 새로운 길이 반환
    }
    count++; // 반복문이 top3 점수가 3개가 될 때까지 반복하니까
}

console.log(count - 1);
