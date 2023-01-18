// 문제 : 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 출력 (단, 소숫점 자리는 모두 버림)

const scores = prompt('점수를 입력하세요.').split(' ');

let sum = 0;

for (let i = 0; i < 3; i++) {
    sum += parseInt(scores[i]); // 십진수의 형태의 숫자로 데이터 타입을 변환
}

console.log(Math.floor(sum / 3)); // Math.floor() : 소수점 자리를 모두 버림
