// 문제 : 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수 만들기

const r = prompt('원의 반지름을 입력하세요.');

function circle(n) {
    const result = Math.pow(parseInt(n), 2) * 3.14;
    return result;
}

console.log(circle(r));
