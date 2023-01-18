// 문제 : 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 출력

const num = prompt('숫자를 입력하세요.').split(' ');

console.log(Math.pow(num[0], num[1]));

// Math.pow(밑 값, 지수)
