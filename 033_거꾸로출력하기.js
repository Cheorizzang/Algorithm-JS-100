// 문제 : 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력

const num = prompt('숫자 다섯 개를 사이에 공백을 넣어 입력하세요.');
console.log(num.split(' ').reverse().join(' '));

// reverse() : 문자열 말고 배열만 거꾸로

// 다른 풀이

const data = prompt('숫자 다섯 개를 사이에 공백을 넣어 입력하세요.')
    .split(' ')
    .reverse();
const result = '';

for (let i = 0; i < data.length; i++) {
    result += data[i];
}

console.log(result);
