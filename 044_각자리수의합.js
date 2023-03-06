// 입력받은 양의 정수의 각 자리수의 합을 출력하기

const num = prompt('양의 정수를 입력하세요.')
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur)); // reduce를 활용해 배열의 모든 값 더하기
console.log(num);

// 다른 풀이

let n = prompt('숫자를 입력하세요.');
let sum = 0;

while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);
