// 문제 : 공백으로 구분하여 두 숫자가 주어지면, 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력

const num = prompt('숫자를 입력하세요.').split(' ');

console.log(parseInt(num[0] / num[1]) + ' ' + (num[0] % num[1]));

// 다른 풀이

const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
